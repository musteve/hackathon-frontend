import { Accordion, Button, Flex, NativeSelect, Select, Stack, UnstyledButton } from "@mantine/core";
import PersonalData from "./type-personal-data";
import DeleteButton from "./delete-button";
import EditPersonalData from "./edit-personal-data";
import { useEffect, useState } from "react";
import GetPersonalData from "../../http/demo/get-personal-data";
import { IconArrowsSort } from "@tabler/icons-react";

function PersonalDataCards() {
    const [data, setData] = useState<PersonalData[]>([])
    
    useEffect(() => {
        GetPersonalData(setData)
    }, [])

    const sortByName = () => {
        var clone = Array.from(data)
        clone.sort((a, b) => {
            if (a.name > b.name) return 1
            else return -1
        })
        setData(clone)
    }

    const sortByCreation = () => {
        var clone = Array.from(data)
        clone.sort((a, b) => {
            if (a.id > b.id) return 1
            else return -1
        })
        setData(clone)
    }

    const SortBox = () => {
        const sort = ["creation-day", "name", "age"]
        const [sortValue, setSortValue] = useState<string>(sort[0])

        const sortAsc = (v: keyof PersonalData) => {
            var clone = Array.from(data)
            clone.sort((a, b) => {
                if (a[v] > b[v]) return 1
                else return -1
            })
            setData(clone)
        }
        return (
            <Flex>
                <NativeSelect
                    title="sort"
                    data={sort}
                    defaultValue={sort[0]}
                    value={sortValue}
                    onChange={(e) => setSortValue(e.currentTarget.value)}
                ></NativeSelect>
                <Button 
                    onClick={() => sortAsc(sortValue as keyof PersonalData)}
                ><IconArrowsSort></IconArrowsSort></Button>
            </Flex>
        )
    }

    const createCards = data.map((item) => (
        <Accordion.Item key={item.id} value={item.name}>
            <Accordion.Control>
                {item.name}
            </Accordion.Control>
            <Accordion.Panel>
                <Stack>
                    <UnstyledButton>{item.id}</UnstyledButton>
                    <UnstyledButton>{item.name}</UnstyledButton>
                    <UnstyledButton>{item.age}</UnstyledButton>

                    <EditPersonalData data={item} />
                    <DeleteButton id={item.id} />
                </Stack>
            </Accordion.Panel>
        </Accordion.Item>
    ))

    return (
        <>
            <SortBox />
            <Button onClick={sortByName}>sortByName</Button>
            <Button onClick={sortByCreation}>sortByCreation</Button>
            <Accordion variant="contained">{createCards}</Accordion>
        </>
    )
}

export default PersonalDataCards