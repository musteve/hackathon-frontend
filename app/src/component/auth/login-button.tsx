import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from "firebase/auth";
import React, { useState } from "react";
import { fireAuth } from "../../firebase";
import { Button, Modal, ScrollArea, Text } from "@mantine/core";
import { useDisclosure, useToggle } from "@mantine/hooks";
import { useForm } from "@mantine/form";

export const LoginButton = () => {
    
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
    
    const [opened, {open, close}] = useDisclosure(false)
    const [type, toggle] = useToggle(['login', 'register']);

    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
          },
      
          validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
          },
    })

    return (
        <>
            <Modal opened={opened} onClose={close} title="register new blog" size="lg">
                <ScrollArea>
                    <Text size="lg" fw={500}>
                        Welcome to Mantine, {type} with
                    </Text>
                    
                </ScrollArea>
            </Modal>
            <Button onClick={open} m="1rem">New</Button>
        </>
    )
}

export default LoginButton