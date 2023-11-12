import { signOut } from "firebase/auth"
import { fireAuth } from "../../firebase"
import { Button } from "@mantine/core"

function SignoutButton() {
    const signOutWithGoogle = () => {
        signOut(fireAuth).then(() => {
            alert("Successfully logged out")
        }).catch(err => {
            alert(err)
        })
    }

    return (
        <Button 
            onClick={signOutWithGoogle}
            color="gray"
            variant="light"
            mr="0.5rem"
            fw={700}
        >
            sign out
        </Button>
    )
}

export default SignoutButton