import { Navigate } from 'react-router-dom';
import {PropsWithChildren, ReactNode} from "react";

const AuthProtected = ({ redirectPath = '/login', requiresAuth = true, children }: PropsWithChildren<{redirectPath?:string; requiresAuth?:boolean; children?:ReactNode}>) => {
    const accessToken = localStorage.getItem('access_token');

    if (requiresAuth && !accessToken) {
        return <Navigate to={redirectPath} />;
    }

    if (!requiresAuth && accessToken) {
        // If the route should not be accessed when authenticated (like `/login`), redirect to `/dashboard`
        return <Navigate to="/dashboard" />;
    }

    // If all checks pass, render the child components
    return (
        <>
            {children}
        </>
    );
};
export default AuthProtected;