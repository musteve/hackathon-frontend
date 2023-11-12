import { Button, Flex, Modal, ScrollArea, TextInput } from "@mantine/core"
import { hasLength, useForm } from "@mantine/form"
import { useDisclosure } from "@mantine/hooks"
import Curriculum from "../../model/curriculum"
import InsertCurriculumData from "../../http/curriculum/insert-curriculum-data"

export default CurriculumForm

function CurriculumForm() {
    const [opened, {open, close}] = useDisclosure(false)

    const form = useForm({
        initialValues: {
            title: "",
            chapter: "",
            url: "",
            tag: "",
            description: "",
        },
        validate: {
            title: hasLength({min: 1, max: 100}, "Title must be 1-100 characters long"),

            chapter: hasLength({min: 1, max: 100}, "Chapter name must be 1-100 characters long"),

            url: hasLength({min: 1, max: 1000}, "URL must be 1-1000 characters long"),

            description: hasLength({min: 1, max: 1000}, "Description must be 1-1000 characters long \nEven if nothing, enter some text"),

            tag: (value) => (
                value.length === 0 || value.length > 100
                ? "tag must be 1-100 characters long"
                : value.includes(" ")
                ? "space should not be included"
                : null
            )
        },
        validateInputOnChange: true
    })

    const formContent: {label: string, description: string}[] = [
        {label: "title", description: ""},
        {label: "chapter", description: ""},
        {label: "url", description: ""},
        {label: "tag", description: "comma-sepatated"},
        {label: "description", description: ""},
    ]

    const formItems = formContent.map((i) => (
        <TextInput label={i.label} description={i.description} {...form.getInputProps(i.label)}></TextInput>
    ))
    return (
        <>
            <Modal opened={opened} onClose={close} title="register new curriculum" size="lg">
                <ScrollArea>
                    <form 
                        onSubmit={form.onSubmit((values) => {
                            InsertCurriculumData(values as Curriculum)
                            close()
                        })}
                    >
                        {formItems}
                        <Flex justify="flex-end" p="1rem">
                            <Button type="submit" >submit</Button>
                        </Flex>
                    </form>
                </ScrollArea>
            </Modal>
            <Button onClick={open} m="1rem">New</Button>
        </>
    )
}