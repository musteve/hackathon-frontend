import { useEffect, useState } from "react"

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

    return <ul>{msg?.message}</ul>
}

export default HelloWorld