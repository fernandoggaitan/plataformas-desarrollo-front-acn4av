import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [is_logueado, setIsLogueado] = useState(false);
    const [accessToken, setAccessToken] = useState(null);

    const login = (accessToken) => {
        setIsLogueado(true);
        setAccessToken(accessToken);
    }

    const logout = () => {
        setIsLogueado(false);
        setAccessToken(null);
    }

    return <AuthContext.Provider value={ {is_logueado, accessToken, login, logout} }>
        {children}
    </AuthContext.Provider>

}

//Accede a los valores y funcionalidades del contexto.
export const useAuth = () => {
    return useContext(AuthContext)
}