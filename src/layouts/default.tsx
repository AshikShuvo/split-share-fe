import {Outlet} from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"
import GlobalLoadingComponent from "@/components/global-loading.tsx";


export default function DefaultLayout() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <GlobalLoadingComponent />
            <Outlet />
            <Toaster />
        </div>
    )
}