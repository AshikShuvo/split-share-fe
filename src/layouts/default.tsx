import {Outlet} from "react-router-dom";

export default function DefaultLayout() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <Outlet />
        </div>
    )
}