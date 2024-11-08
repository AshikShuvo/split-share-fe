import {LoginForm} from "@/components/login-form.tsx";
import useAuthStore from "@/store/useAuthStore.ts";
import {SignInDto} from "@/services/auth/dto";

export default function LoginPage() {
    const authStore = useAuthStore();
    const handleSignIn =  (Payload: SignInDto) => {
        authStore.proceedToSignIn(Payload);
    }
    return <LoginForm handleSignIn={handleSignIn}/>;
}