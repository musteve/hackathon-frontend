import { Button, Group, Modal, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function DeletePersonalData(props: {id: string}) {
    const [opened, {open, close}] = useDisclosure(false)

    const fetchData = async () => {
        try {
            await fetch(
                "https://hackathon-backend-main-mxtuefqkua-uc.a.run.app/deleteuser",
                        {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                id: props.id
                            })
                        }
            )
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Modal opened={opened} onClose={close}>
                <center>
                    <UnstyledButton>本当に削除しますか？</UnstyledButton>
                    <center>
                        <Button onClick={() => {
                            close()
                            fetchData()
                        }}>Yes</Button>
                        <Button onClick={close}>No</Button>
                    </center>
                </center>
            </Modal>

            <Button onClick={open}>delete</Button>
        </>
    )
}

export default DeletePersonalData