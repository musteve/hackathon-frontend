import { Button } from "@mantine/core"
import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <h3>home page</h3>
            <Button component={Link} to="/books">
                    books
            </Button>
            <Button>
                blogs
            </Button>
            <Button>
                vedeos
            </Button>
        </div>
    )
}

export default Home