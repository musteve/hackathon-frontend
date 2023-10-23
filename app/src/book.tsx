import { Button } from "@mantine/core"
import { Link } from "react-router-dom"
import HelloWorld from "./hello-world"
import GetPersonalData from "./get-personal-data"

function Book() {
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

export default Book