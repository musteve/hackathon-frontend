import { createContext, useContext, useEffect, useState } from "react";
import { fireAuth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext(fireAuth.currentUser)

export function useAuthContext() {
    return useContext(AuthContext)
}

export function AuthProvider({children}: any) {
    const [loginUser, setLoginUser] = useState(fireAuth.currentUser)

    useEffect(() => {
        onAuthStateChanged(fireAuth, user => {
            setLoginUser(user)
        })
    })

    return (
        <AuthContext.Provider value={loginUser}>
            {children}
        </AuthContext.Provider>
    )
}