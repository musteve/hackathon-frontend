import { Button } from "@mantine/core"
import { Link } from "react-router-dom"
import HelloWorld from "./get-hello-world"
import GetPersonalData from "./get-personal-data"

function Books() {
    return  (
        <>
            <h3>books page</h3>
            <Button component={Link} to="/">
                home
            </Button>
            <HelloWorld />
            <GetPersonalData />
        </>
    )
}

export default Books