import {create} from "zustand";
import {SignInDto} from "@/services/auth/dto";
import {userSignIn} from "@/services/auth/apis";

interface AuthState {
    isAuthenticated: boolean;
    proceedToSignIn: (payload: SignInDto) => void;
    proceedToSignOut: () => void;
}

const useAuthStore = create<AuthState>()((set) => ({
    isAuthenticated: !!localStorage.getItem("access_token"),
    proceedToSignIn: async (payload) => {
        const response = await userSignIn(payload);
        if(response) {
            localStorage.setItem("access_token", response.access_token);
            set((state) => ({
                ...state,
                isAuthenticated: true,
            }))
        }
    },
    proceedToSignOut: () => {
        localStorage.removeItem("access_token");
        window.location.reload();
    }
}));
export default useAuthStore;