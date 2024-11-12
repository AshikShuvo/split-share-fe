import {create} from "zustand";
import {SignInDto, SignUpDto} from "@/services/auth/dto";
import {userSignIn, userSignup} from "@/services/auth/apis";

interface AuthState {
    isAuthenticated: boolean;
    proceedToSignIn: (payload: SignInDto) => void;
    proceedToSignOut: () => void;
    proceedToSignUp: (payload: SignUpDto) => void;

}

const useAuthStore = create<AuthState>()(() => ({
    isAuthenticated: !!localStorage.getItem("access_token"),
    proceedToSignIn: async (payload) => {
        const response = await userSignIn(payload);
        console.log(response);

        if(response) {
            localStorage.setItem("access_token", response.access_token);
            window.location.reload();
        }
    },
    proceedToSignOut: () => {
        localStorage.removeItem("access_token");
        window.location.reload();
    },
    proceedToSignUp: async (payload:SignUpDto) => {
        const response = await userSignup(payload);

        if(response) {
            localStorage.setItem("access_token", response.access_token);
            window.location.reload();
        }
    }

}));
export default useAuthStore;