import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import useSiteStore from "@/store/useSiteStore";
import {toast} from "@/hooks/use-toast.ts";

export interface CustomAxiosRequestConfig<T = any> extends InternalAxiosRequestConfig<T> {
    useGlobalLoading?: boolean;
    loadingKey?: string;
}
const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
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

        return response.data;
    },
    (error) => {
        if (error.config?.useGlobalLoading) {
            useSiteStore.getState().setGlobalLoading(false);
        }

        if (error.config?.loadingKey) {
            useSiteStore.getState().setLocalLoading(error.config.loadingKey, false);
        }
        toast({
            variant: "destructive",
            title: "API Error",
            description: error.response?.data?.message?.message,
        })


        console.error('API Error:', error.response?.data?.message?.message || error.message);
        return Promise.reject(error);
    }
);

export default api;
