import ShowBlogCards from "../component/blog/show-blog-cards"
import { useAuthContext } from "../context/auth-context"

function Blogs() {
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
                <ShowBlogCards />
            </>
        )
    }
}

export default Blogs