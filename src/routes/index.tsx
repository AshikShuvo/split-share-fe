import {createBrowserRouter, Navigate} from "react-router-dom";
import DefaultLayout from "@/layouts/default.tsx";
import LoginPage from "@/pages/auth/Login.tsx";
import AuthProtected from "@/routes/guards/AuthProtected.tsx";
import SignupPage from "@/pages/auth/Signup.tsx";


const route = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children:[
            {
                path: '',  // Root route
                element: (
                    <AuthProtected redirectPath="/login">
                        <Navigate to="/dashboard" />
                    </AuthProtected>
                )
            },
            {
                path: 'login',
                element: (
                    <AuthProtected requiresAuth={false}>
                        <LoginPage />
                    </AuthProtected>
                )
            },
            {
                path: 'signup',
                element: (
                    <AuthProtected requiresAuth={false}>
                        <SignupPage />
                    </AuthProtected>
                )
            },
            {
                path: 'dashboard',
                element: (
                    <AuthProtected redirectPath="/login">
                        <h1>hello dashboard</h1>
                    </AuthProtected>
                )
            },
            { path: '*', element: <Navigate to="/" /> }
        ]
    }
])
export default route;