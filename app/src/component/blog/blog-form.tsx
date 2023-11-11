import { Button, Flex, Modal, TextInput } from "@mantine/core"
import { hasLength, useForm } from "@mantine/form"
import { useDisclosure } from "@mantine/hooks"
import Blog from "../../model/blog"
import InsertBlogData from "../../http/blog/insert-blog-button"

export default BlogForm

function BlogForm() {
    const [opened, {open, close}] = useDisclosure(false)

    const form = useForm({
        initialValues: {
            title: "",
            author: "",
            url: "",
            tag: "",
            description: "",
        },
        validate: {
            title: hasLength({min: 1, max: 100}, "Title must be 1-100 characters long"),

            author: hasLength({min: 1, max: 100}, "Author must be 1-100 characters long"),

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
        {label: "author", description: ""},
        {label: "url", description: ""},
        {label: "tag", description: "comma-sepatated"},
        {label: "description", description: ""},
    ]

    const formItems = formContent.map((i) => (
        <TextInput label={i.label} description={i.description} {...form.getInputProps(i.label)}></TextInput>
    ))
    return (
        <>
            <Modal opened={opened} onClose={close} title="register new blog" size="auto">
                <form 
                    onSubmit={form.onSubmit((values) => {
                        InsertBlogData(values as Blog)
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