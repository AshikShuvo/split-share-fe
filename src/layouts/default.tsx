import {Outlet} from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"


export default function DefaultLayout() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <Outlet />
            <Toaster />
        </div>
    )
}