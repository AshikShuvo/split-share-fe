export interface SignInDto{
    email: string;
    password: string;
}
export interface SignInResponseDto{
    access_token: string;
}
export interface SignUpDto{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}