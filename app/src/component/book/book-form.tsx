import { Button, Flex, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import InsertBookData from "../../http/book/insert-book-data";
import Book from "../../model/book";

export default BookForm

function BookForm() {
    const [opened, {open, close}] = useDisclosure(false)

    const form = useForm({
        initialValues: {
            title: "",
            author: "",
            issue_date: "",
            publisher: "",
            description: "",
            tag: ""
        },
        validateInputOnChange: true
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
            <Modal opened={opened} onClose={close} title="register new book">
                <form 
                    onSubmit={form.onSubmit((values) => {
                        InsertBookData(values as Book)
                        close()
                    })}
                >
                    {formItems}
                    <Flex justify="flex-end" p="1rem">
                        <Button type="submit" >submit</Button>
                    </Flex>
                </form>
            </Modal>
            <Button onClick={open} m="1rem">New</Button>
        </>
    )
}