import { useState } from "react";
import Book from "../../model/book";
import { Button, Flex, NativeSelect } from "@mantine/core";
import { IconSortAscending, IconSortDescending } from "@tabler/icons-react";

function SortBook(props: {
    data: Book[], 
    setfunc: React.Dispatch<React.SetStateAction<Book[]>>
}) {
    const sortBy = ["creation-day", "last-update", "title", "issue-date", "publisher"]
    const [sortValue, setSortValue] = useState<string>(sortBy[0])

    const sortControl = (isAsc: boolean) => {
        switch (sortValue) {
            case "creation-day": 
                isAsc ? sortAsc("id" as keyof Book) : sortDesc("id" as keyof Book)
                return
            case "last-update": 
                isAsc ? sortAsc("last_update" as keyof Book) : sortDesc("last_update" as keyof Book)      
                return
            case "title": 
                isAsc ? sortAsc("title" as keyof Book) : sortDesc("title" as keyof Book)
                return
            case "issue-date": 
                isAsc ? sortAsc("issue_date" as keyof Book) : sortDesc("issue_date" as keyof Book)
                return
            case "publisher": 
                isAsc ? sortAsc("publisher" as keyof Book) : sortDesc("publisher" as keyof Book)
                return
        }
    }

    const sortAsc = (v: keyof Book) => {
        var clone = Array.from(props.data)
        clone.sort((a, b) => {
            if (a[v] > b[v]) return 1
            else return -1
        })
        props.setfunc(clone)
    }

    const sortDesc = (v: keyof Book) => {
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

export default SortBook