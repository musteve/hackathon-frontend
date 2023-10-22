import { Button } from "@mantine/core"
import { Link } from "react-router-dom"
import HelloWorld from "./hello-world"
import GetPersonalData from "./get-personal-data"

function Books() {
    return  (
        <div>
            <h3>books page</h3>
            <Button component={Link} to="/">
                home
            </Button>
            <HelloWorld />
            <GetPersonalData />
        </div>
    )
}

export default Books