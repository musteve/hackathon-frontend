import { useState } from "react"
import Curriculum from "../../model/curriculum"
import { Button, Flex, Input, Radio } from "@mantine/core"

function FliterCurriculum(props: {
    data: Curriculum[], 
    setfunc: React.Dispatch<React.SetStateAction<Curriculum[]>>
}) {
    const [filterCategory, setFilterCategory] = useState("tag")
    const [filterBy, setFilterBy] = useState("")
    const filter = (by: string, category: keyof Curriculum) => {
        var clone = Array.from(props.data)
        const filtered = clone.filter((i) => {
            return i[category].includes(by.toLocaleLowerCase())
        })
        props.setfunc(filtered)
    }
    return (
        <Flex mx="1rem" mb="1rem">
            <Input
                placeholder="enter tag/chapter here"
                value={filterBy}
                onChange={(e) => setFilterBy(e.currentTarget.value.toLocaleLowerCase())}
            >
            </Input>
            <Radio.Group
                ml="1rem"
                value={filterCategory}
                onChange={setFilterCategory}
            >
                <Radio value="tag" label="tag" />
                <Radio value="chapter" label="chapter" />
            </Radio.Group>
            <Button mx="0.5rem"
                onClick={() => filter(filterBy, filterCategory as keyof Curriculum)}
            >
                Filter
            </Button>
        </Flex>
    )
}

export default FliterCurriculum