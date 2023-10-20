import { Button } from "@mantine/core"
import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <h3>home home</h3>
            <Button component={Link} to="/books">
                    books
            </Button>
        </div>
    )
}

export default Home