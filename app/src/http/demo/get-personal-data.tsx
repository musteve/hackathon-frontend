import { useState, useEffect } from "react";
import PersonalData from "../../component/demo/type-personal-data";

function GetPersonalData() {
    const [data, setData] = useState<PersonalData[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch (
                    "https://hackathon-backend-main-mxtuefqkua-uc.a.run.app/demo",
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

    return data
}

export default GetPersonalData