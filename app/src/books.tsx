import { Button } from "@mantine/core"
import { Link } from "react-router-dom"

function Books() {
    return  (
        <div>
            <h3>books books</h3>
            <Button component={Link} to="/">
                home
            </Button>
        </div>
    )
}

export default Books