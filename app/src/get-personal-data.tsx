import { useState, useEffect } from "react";

type personalData = {
    id: string
    name: string
    age: number
}

function GetPersonalData() {
    const [data, setData] = useState<personalData[]>([])

    useEffect(() => {
        const fetchData =async () => {
            try {
                const response = await fetch (
                    "https://hackathon-backend-main-mxtuefqkua-uc.a.run.app/getusers",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        }
                    }
                )
                setData(await response.json())
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])

    const list = data.map((e) => <li key={e.id}>{e.name}, {e.age}</li>)
    return <ul>{list}</ul>
}

export default GetPersonalData


function AddPersonalData() {
    
}