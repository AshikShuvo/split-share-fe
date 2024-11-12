import {SignInDto, SignInResponseDto, SignUpDto} from "@/services/auth/dto";
import {PATH_SIGN_UP, PATH_SIGNIN} from "@/services/auth/endpoints";
import api, {CustomAxiosRequestConfig} from "@/services/baseApi";

export const userSignIn = async (payload: SignInDto): Promise<SignInResponseDto | null> => {
    try {
        return await api.post<SignInDto, SignInResponseDto>(PATH_SIGNIN, payload, {
            useGlobalLoading: true,
        } as CustomAxiosRequestConfig);
    } catch {
        return null;
    }
}
export const userSignup = async (payload: SignUpDto): Promise<SignInResponseDto | null> => {
    try {
        return await api.post<SignUpDto, SignInResponseDto>(PATH_SIGN_UP, payload, {useGlobalLoading: true} as CustomAxiosRequestConfig)
    } catch {
        return null;
    }
}