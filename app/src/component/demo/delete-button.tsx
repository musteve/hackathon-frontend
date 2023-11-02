import { Button, Modal, UnstyledButton } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import DeletePersonalData from "../../http/demo/delete-personal-data"

function DeleteButton(props: {id: string}) {
    const [opened, {open, close}] = useDisclosure(false)
    return (
        <>
            <Modal opened={opened} onClose={close}>
                <center>
                    <UnstyledButton>Are you sure to delete it?</UnstyledButton>
                    <center>
                        <Button onClick={() => {
                            close()
                            DeletePersonalData(props.id)
                        }}>Yes</Button>
                        <Button onClick={close}>No</Button>
                    </center>
                </center>
            </Modal>

            <Button onClick={open}>delete</Button>
        </>
    )
}

export default DeleteButton