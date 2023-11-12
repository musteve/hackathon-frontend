import { useState } from "react"
import Curriculum from "../../model/curriculum"
import { Button, Flex, Input } from "@mantine/core"

function FliterCurriculum(props: {
    data: Curriculum[], 
    setfunc: React.Dispatch<React.SetStateAction<Curriculum[]>>
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

export default FliterCurriculum