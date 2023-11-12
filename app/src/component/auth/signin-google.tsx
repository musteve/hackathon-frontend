import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { fireAuth } from "../../firebase"
import { Button } from "@mantine/core"

function SigninGoogle() {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
    
        signInWithPopup(fireAuth, provider)
            .then(res => {
                const user = res.user
                alert("Create user and Login: " + user.displayName)
            })
            .catch(err => {
                const errorMessage = err.message
                alert(errorMessage)
            })
    }

    return (
        <Button 
            onClick={signInWithGoogle}
            variant="light" 
            color="gray"
            fw={1000}
            fz="xl"
            mr="0.5rem"
        >G</Button>
    )
}

export default SigninGoogle