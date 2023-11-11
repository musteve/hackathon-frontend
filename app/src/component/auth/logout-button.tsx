import { signOut } from "firebase/auth"
import { fireAuth } from "../../firebase"
import { Button } from "@mantine/core"

function LogoutButton() {
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
        >
            sign out
        </Button>
    )
}

export default LogoutButton