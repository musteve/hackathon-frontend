import { useState } from "react"
import Blog from "../../model/blog"
import { Button, Flex, Input } from "@mantine/core"

function FliterBlog(props: {
    data: Blog[], 
    setfunc: React.Dispatch<React.SetStateAction<Blog[]>>
}) {

    const [filterBy, setFilterBy] = useState("")
    const filter = (by: string) => {
        var clone = Array.from(props.data)
        const filtered = clone.filter((i) => {
            return i.tag.includes(by.toLocaleLowerCase())
        })
        props.setfunc(filtered)
    }
    return (
        <Flex mx="1rem" mb="1rem">
            <Input
                placeholder="enter tag here"
                value={filterBy}
                onChange={(e) => setFilterBy(e.currentTarget.value.toLocaleLowerCase())}
            >
            </Input>
            <Button mx="1rem"
                onClick={() => filter(filterBy)}
            >
                Filter
            </Button>
        </Flex>
    )
}

export default FliterBlog