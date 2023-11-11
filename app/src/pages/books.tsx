import ShowBookCards from "../component/book/show-book-cards"
import { useAuthContext } from "../context/auth-context"

function Books() {
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
                <ShowBookCards />
            </>
        )
    }
}

export default Books