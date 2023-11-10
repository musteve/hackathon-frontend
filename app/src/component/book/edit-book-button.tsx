import { useDisclosure } from "@mantine/hooks"
import Book from "../../model/book"
import { useForm } from "@mantine/form"
import { Button, Flex, Modal, TextInput } from "@mantine/core"
import PutBookData from "../../http/book/put-book-data"

function EditBookButton(props: {data: Book}) {
    const [opened, {open, close}] = useDisclosure(false)

    const form = useForm({
        initialValues: {
            id: props.data.id,
            title: props.data.title,
            author: props.data.author,
            issue_date: props.data.issue_date,
            publisher: props.data.publisher,
            description: props.data.description,
            tag: props.data.tag,
        },
    })

    const formContent: {label: string, description: string}[] = [
        {label: "title", description: ""},
        {label: "author", description: ""},
        {label: "issue_date", description: "YYYY-MM-DD"},
        {label: "publisher", description: ""},
        {label: "description", description: ""},
        {label: "tag", description: "半角スペース区切り"}
    ]

    const formItems = formContent.map((i) => (
        <TextInput label={i.label} description={i.description} {...form.getInputProps(i.label)}></TextInput>
    ))

    return (
        <>
            <Modal opened={opened} onClose={close} title="edit">
                <form
                    onSubmit={form.onSubmit((values) => {
                        PutBookData(values as Book)
                        close()
                    })}
                >
                    {formItems}
                    <Flex justify="flex-end" p="1rem">
                        <Button type="submit" >submit</Button>
                    </Flex>
                </form>
            </Modal>

            <Button onClick={open} m="1rem">Edit</Button>
        </>
    )
}

export default EditBookButton