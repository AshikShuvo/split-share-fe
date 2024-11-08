import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import useSiteStore from "@/store/useSiteStore";

interface CustomAxiosRequestConfig<T = any> extends InternalAxiosRequestConfig<T> {
    useGlobalLoading?: boolean;
    loadingKey?: string;
}
const api = axios.create({
    baseURL: 'https://api.example.com', // replace with your API base URL
});

api.interceptors.request.use(
    (config: CustomAxiosRequestConfig) => {
        const { useGlobalLoading = true, loadingKey } = config;

        if (useGlobalLoading) {
            useSiteStore.getState().setGlobalLoading(true);
        }

        if (loadingKey) {
            useSiteStore.getState().setLocalLoading(loadingKey, true);
        }

        return config;
    },
    (error) => {
        if (error.config?.useGlobalLoading) {
            useSiteStore.getState().setGlobalLoading(false);
        }

        if (error.config?.loadingKey) {
            useSiteStore.getState().setLocalLoading(error.config.loadingKey, false);
        }

        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response: AxiosResponse) => {
        const { useGlobalLoading = true, loadingKey } = response.config as CustomAxiosRequestConfig;

        if (useGlobalLoading) {
            useSiteStore.getState().setGlobalLoading(false);
        }

        if (loadingKey) {
            useSiteStore.getState().setLocalLoading(loadingKey, false);
        }

        return response;
    },
    (error) => {
        if (error.config?.useGlobalLoading) {
            useSiteStore.getState().setGlobalLoading(false);
        }

        if (error.config?.loadingKey) {
            useSiteStore.getState().setLocalLoading(error.config.loadingKey, false);
        }

        console.error('API Error:', error.response?.data?.message || error.message);
        return Promise.reject(error);
    }
);

export default api;
