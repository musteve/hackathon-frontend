import { useForm } from "@mantine/form"
import Blog from "../../model/blog"
import { useDisclosure } from "@mantine/hooks"
import { Button, Flex, Modal, TextInput } from "@mantine/core"
import PutBlogData from "../../http/blog/put-blog-data"

function EditBlogButton(props: {data: Blog}) {
    const [opened, {open, close}] = useDisclosure(false)

    const form = useForm({
        initialValues: {
            id: props.data.id,
            title: props.data.title,
            author: props.data.author,
            url: props.data.url,
            tag: props.data.tag,
            description: props.data.description,
        },
    })

    const formContent: {label: string, description: string}[] = [
        {label: "title", description: ""},
        {label: "author", description: ""},
        {label: "url", description: ""},
        {label: "tag", description: "半角スペース区切り"},
        {label: "description", description: ""},
    ]

    const formItems = formContent.map((i) => (
        <TextInput label={i.label} description={i.description} {...form.getInputProps(i.label)}></TextInput>
    ))

    return (
        <>
            <Modal opened={opened} onClose={close} title="edit">
                <form
                    onSubmit={form.onSubmit((values) => {
                        PutBlogData(values as Blog)
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

export default EditBlogButton