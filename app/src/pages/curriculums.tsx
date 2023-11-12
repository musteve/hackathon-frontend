import ShowCurriculumCards from "../component/curriculum/show-curriculum-cards"
import { useAuthContext } from "../context/auth-context"

function Curriculums() {
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
                <ShowCurriculumCards />
            </>
        )
    }
}

export default Curriculums