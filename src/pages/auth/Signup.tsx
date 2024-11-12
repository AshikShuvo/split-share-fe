import RegistrationForm from "@/components/registration-form.tsx";
import useAuthStore from "@/store/useAuthStore.ts";
import { SignUpDto } from "@/services/auth/dto";

export default function SignupPage() {
    const authStore = useAuthStore();
    const handleSignUp =  (Payload: SignUpDto) => {
        authStore.proceedToSignUp(Payload);
    }
    return <RegistrationForm handleSignUp={handleSignUp}/>
}