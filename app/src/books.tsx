import { Button } from "@mantine/core"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Books() {
    return  (
        <div>
            <h3>books page</h3>
            <Button component={Link} to="/">
                home
            </Button>
            <HelloWorld />
        </div>
    )
}

export default Books


type message = {
    message: string
}
function HelloWorld() {
    const [msg, setMsg] = useState<message>()
    useEffect(() => {
        const getMessage = async () => {
            try {
                const response = await fetch(
                    "https://hackathon-backend-main-mxtuefqkua-uc.a.run.app/hello",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                setMsg(await response.json())
            } catch (err) {
                console.log("Failed to get user data.", err)
            }
        }
        getMessage()
    }, [])

    return(
        <div>
            <ul>{msg?.message}</ul>
        </div>
    )
}