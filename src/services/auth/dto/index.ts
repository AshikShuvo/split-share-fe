export interface SignInDto{
    email: string;
    password: string;
}
export interface SignInResponseDto{
    access_token: string;
}