import ShowVedeoCards from "../component/vedeo/show-vedeo-cards"
import { useAuthContext } from "../context/auth-context"

function Vedeos() {
    const loginUser = useAuthContext()

    if (!loginUser) {
        return (
            <>
                login is required
            </>
        )
    } else {
        return  (
            <>
                <ShowVedeoCards />
            </>
        )
    }
}

export default Vedeos