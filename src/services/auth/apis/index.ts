import {SignInDto, SignInResponseDto} from "@/services/auth/dto";
import {PATH_SIGNIN} from "@/services/auth/endpoints";
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