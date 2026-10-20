import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"

export function ProtectedRoute ( {children} ) {

    const {is_logueado} = useAuth();

    if(is_logueado){
        return children;
    }else{
        return <Navigate to="/login" />
    }

}