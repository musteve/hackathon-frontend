import { Button, Flex, Input} from "@mantine/core"
import Book from "../../model/book"
import { useState } from "react"

function FliterBook(props: {
    data: Book[], 
    setfunc: React.Dispatch<React.SetStateAction<Book[]>>
}) {

    const [filterBy, setFilterBy] = useState("")
    const filter = (by: string) => {
        var clone = Array.from(props.data)
        const filtered = clone.filter((i) => {
            return i.tag.includes("," + by) || i.tag.includes(by + ",")
        })
        props.setfunc(filtered)
    }
    return (
        <Flex>
            <Input
                placeholder="enter tag here"
                value={filterBy}
                onChange={(e) => setFilterBy(e.currentTarget.value)}
            >
            </Input>
            <Button
                onClick={() => filter(filterBy)}
            >
                Filter
            </Button>
        </Flex>
    )
}

export default FliterBook