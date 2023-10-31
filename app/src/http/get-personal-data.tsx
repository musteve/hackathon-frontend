import { Accordion, Button, Stack, UnstyledButton } from "@mantine/core";
import { useState, useEffect } from "react";
import DeletePersonalData from "./delete-personal-data";

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

    const createAccordionItmes = data.map((item) => (
        <Accordion.Item key={item.id} value={item.name}>
            <Accordion.Control>
                {item.name}
            </Accordion.Control>
            <Accordion.Panel>
                <Stack>
                    <UnstyledButton>{item.age}</UnstyledButton>
                    <UnstyledButton>{item.name}</UnstyledButton>
                    <Button>edit</Button>
                    <DeletePersonalData id={item.id}/>
                </Stack>
            </Accordion.Panel>
        </Accordion.Item>
    ))

    return (
        <>
            <Accordion
                variant="contained"
            >{createAccordionItmes}</Accordion>
        </>
    ) 
}



export default GetPersonalData