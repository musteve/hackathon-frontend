import { useState } from "react"
import Curriculum from "../../model/curriculum"
import { Button, Flex, NativeSelect } from "@mantine/core"
import { IconSortAscending, IconSortDescending } from "@tabler/icons-react"

function SortCurriculum(props: {
    data: Curriculum[], 
    setfunc: React.Dispatch<React.SetStateAction<Curriculum[]>>
}) {
    const sortBy = ["creation-day", "last-update", "title", "chapter"]
    const [sortValue, setSortValue] = useState<string>(sortBy[0])

    const sortControl = (isAsc: boolean) => {
        switch (sortValue) {
            case "creation-day": 
                isAsc ? sortAsc("id" as keyof Curriculum) : sortDesc("id" as keyof Curriculum)
                return
            case "last-update": 
                isAsc ? sortAsc("last_update" as keyof Curriculum) : sortDesc("last_update" as keyof Curriculum)      
                return
            case "title": 
                isAsc ? sortAsc("title" as keyof Curriculum) : sortDesc("title" as keyof Curriculum)
                return
            case "chapter": 
                isAsc ? sortAsc("chapter" as keyof Curriculum) : sortDesc("chapter" as keyof Curriculum)
                return
        }
    }

    const sortAsc = (v: keyof Curriculum) => {
        var clone = Array.from(props.data)
        clone.sort((a, b) => {
            if (a[v] > b[v]) return 1
            else return -1
        })
        props.setfunc(clone)
    }

    const sortDesc = (v: keyof Curriculum) => {
        var clone = Array.from(props.data)
        clone.sort((a, b) => {
            if (a[v] < b[v]) return 1
            else return -1
        })
        props.setfunc(clone)
    }

    return (
        <Flex mx="1rem" mb="1rem">
            <NativeSelect mr="1rem"
                title="sort"
                data={sortBy}
                value={sortValue}
                onChange={(e) => setSortValue(e.currentTarget.value)}
            ></NativeSelect>
            <Button
                onClick={() => sortControl(true)}
                radius="xl"
                variant="default"
            >
                <IconSortAscending />
            </Button>
            <Button
                onClick={() => sortControl(false)}
                radius="xl"
                variant="default"
                ml="0.5rem"
            >
                <IconSortDescending />
            </Button>
        </Flex>
    )
}

export default SortCurriculum