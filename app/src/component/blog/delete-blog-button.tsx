import { Button, Flex, Modal, Stack, UnstyledButton } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import DeleteBlogData from "../../http/blog/delete-blog-button"

function DeleteBlogButton(props: {id: string}) {
    const [opened, {open, close}] = useDisclosure(false)

    return (
        <>
            <Modal opened={opened} onClose={close}>
                <Stack>
                    <Flex justify="center">
                        <UnstyledButton>Are you sure to delete it?</UnstyledButton>
                    </Flex>
                    <Flex justify="space-around" mx="6rem">
                        <Button onClick={() => {
                            DeleteBlogData(props.id)
                            close()
                        }}>Yes</Button>
                        <Button onClick={close}>No</Button>
                    </Flex>
                </Stack>
            </Modal>

            <Button onClick={open} m="1rem" variant="light">delete</Button>
        </>
    )
}

export default DeleteBlogButton