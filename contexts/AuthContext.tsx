import { signInRequest } from "@/services/auth";
import { createContext } from "react";



type AuthContextType = {
    isAuthenticated: boolean;
}

type SignInData = {
    email: string;
    password: string;
}
export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
    const isAuthenticated = false; // Assume the user is not authenticated initially

    async function login({email , password} : SignInData) {
        const { token, user } = await signInRequest({
            email,
            password,
        });
        
    }
    return (
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}