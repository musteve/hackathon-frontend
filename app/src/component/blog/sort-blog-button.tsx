import { useState } from "react"
import Blog from "../../model/blog"
import { Button, Flex, NativeSelect } from "@mantine/core"
import { IconSortAscending, IconSortDescending } from "@tabler/icons-react"

function SortBlog(props: {
    data: Blog[], 
    setfunc: React.Dispatch<React.SetStateAction<Blog[]>>
}) {
    const sortBy = ["creation-day", "last-update", "title"]
    const [sortValue, setSortValue] = useState<string>(sortBy[0])

    const sortControl = (isAsc: boolean) => {
        switch (sortValue) {
            case "creation-day": 
                isAsc ? sortAsc("id" as keyof Blog) : sortDesc("id" as keyof Blog)
                return
            case "last-update": 
                isAsc ? sortAsc("last_update" as keyof Blog) : sortDesc("last_update" as keyof Blog)      
                return
            case "title": 
                isAsc ? sortAsc("title" as keyof Blog) : sortDesc("title" as keyof Blog)
                return
        }
    }

    const sortAsc = (v: keyof Blog) => {
        var clone = Array.from(props.data)
        clone.sort((a, b) => {
            if (a[v] > b[v]) return 1
            else return -1
        })
        props.setfunc(clone)
    }

    const sortDesc = (v: keyof Blog) => {
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

export default SortBlog