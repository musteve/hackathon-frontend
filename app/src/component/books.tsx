import { Button } from "@mantine/core"
import { Link } from "react-router-dom"
import HelloWorld from "../http/get-hello-world"
import GetPersonalData from "../http/get-personal-data"

function Books() {
    return  (
        <>
            <h4>books page</h4>
            {/* <Button component={Link} to="/">
                home
            </Button> */}
        </>
    )
}

export default Books