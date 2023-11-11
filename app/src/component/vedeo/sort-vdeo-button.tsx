import { useState } from "react"
import Vedeo from "../../model/vedeo"
import { Button, Flex, NativeSelect } from "@mantine/core"
import { IconSortAscending, IconSortDescending } from "@tabler/icons-react"

function SortVedeo(props: {
    data: Vedeo[], 
    setfunc: React.Dispatch<React.SetStateAction<Vedeo[]>>
}) {
    const sortBy = ["creation-day", "last-update", "title"]
    const [sortValue, setSortValue] = useState<string>(sortBy[0])

    const sortControl = (isAsc: boolean) => {
        switch (sortValue) {
            case "creation-day": 
                isAsc ? sortAsc("id" as keyof Vedeo) : sortDesc("id" as keyof Vedeo)
                return
            case "last-update": 
                isAsc ? sortAsc("last_update" as keyof Vedeo) : sortDesc("last_update" as keyof Vedeo)      
                return
            case "title": 
                isAsc ? sortAsc("title" as keyof Vedeo) : sortDesc("title" as keyof Vedeo)
                return
        }
    }

    const sortAsc = (v: keyof Vedeo) => {
        var clone = Array.from(props.data)
        clone.sort((a, b) => {
            if (a[v] > b[v]) return 1
            else return -1
        })
        props.setfunc(clone)
    }

    const sortDesc = (v: keyof Vedeo) => {
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

export default SortVedeo