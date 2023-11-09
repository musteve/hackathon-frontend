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
    const FliterBox = () => {
        const filter = () => {
            var clone = Array.from(data)
            const filtered = clone.filter((i) => {
                return i.name.includes("o") || i.name.includes("d")
            })
            setData(filtered)
        }

        return (
            <Button
                onClick={filter}
            >filter name "o"</Button>
        )
    }

    const SortBox = () => {
        const sort = ["creation-day", "last-update", "name", "age"]
        const [sortValue, setSortValue] = useState<string>(sort[0])


        const sortControl = () => {
            switch (sortValue) {
                case "creation-day": 
                    sortAsc("id" as keyof PersonalData) 
                    return
                case "last-update": 
                    sortAsc("last_update" as keyof PersonalData)
                    return
                case "name": 
                    sortAsc("name" as keyof PersonalData)
                    return
                case "age": 
                    sortAsc("age" as keyof PersonalData)
                    return
            }
        }
        const sortAsc = (v: keyof PersonalData) => {
            var clone = Array.from(data)
            clone.sort((a, b) => {
                if (a[v] > b[v]) return 1
                else return -1
            })
            setData(clone)
            // if (sortValue == "name") {
            //     var clone = Array.from(data)
            //     clone.sort((a, b) => {
            //         if (a.name > b.name) return 1
            //         else return -1
            //     })
            //     setData(clone)
            // } else if (sortValue == "age") {
            //     var clone = Array.from(data)
            //     clone.sort((a, b) => {
            //         if (a.age > b.age) return 1
            //         else return -1
            //     })
            //     setData(clone)
            // }
        }
        return (
            <Flex>
                <NativeSelect
                    title="sort"
                    data={sort}
                    value={sortValue}
                    onChange={(e) => setSortValue(e.currentTarget.value)}
                ></NativeSelect>
                <Button 
                    onClick={() => sortControl()}
                ><IconArrowsSort></IconArrowsSort></Button>
                {sortValue}
            </Flex>
        )
    }

    const createCards = data.map((item) => (
        <Accordion.Item key={item.id} value={item.name}>
            <Accordion.Control>
                {item.name},{item.age}
            </Accordion.Control>
            <Accordion.Panel>
                <Stack>
                    <UnstyledButton>{item.id}</UnstyledButton>
                    <UnstyledButton>{item.last_update}</UnstyledButton>
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
            <FliterBox />
            <Button onClick={() => GetPersonalData(setData)}>reset</Button>
            <Button onClick={sortByName}>sortByName</Button>
            <Button onClick={sortByCreation}>sortByCreation</Button>
            <Accordion variant="contained">{createCards}</Accordion>
        </>
    )
}

export default PersonalDataCards