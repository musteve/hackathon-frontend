import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { fireAuth } from "../../firebase";
import { Button } from "@mantine/core";

export const LoginForm: React.FC = () => {
    const [loginUser, setLoginUser] = useState(fireAuth.currentUser)

    onAuthStateChanged(fireAuth, user => {
        setLoginUser(user)
    })

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
    
        signInWithPopup(fireAuth, provider)
            .then(res => {
                const user = res.user
                alert("Login user: " + user.displayName)
            })
            .catch(err => {
                const errorMessage = err.message
                alert(errorMessage)
            })
    }

    return (
        <>
            {loginUser ? "in" : "out"}
            <Button onClick={signInWithGoogle}>
                Sign in with Google
            </Button>
        </>
    )
}