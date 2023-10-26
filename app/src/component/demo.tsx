import { useDisclosure } from "@mantine/hooks"
import HelloWorld from "../http/get-hello-world"
import GetPersonalData from "../http/get-personal-data"
import { Button, Modal, TextInput } from "@mantine/core"

function Demo() {
    return (
        <>
            <HelloWorld /> 
            <GetPersonalData />
            <InputModal />
        </>
    )
}

export default Demo


function InputModal() {
    const [opened, {open, close}] = useDisclosure(false)

    return (
        <>
            <Modal
                opened={opened}
                onClose={close} 
                title="test"
            >
                <TextInput
                    label="Name"
                ></TextInput>
            </Modal>

            <Button
                onClick={open}
            >
                Add Data
            </Button>
        </>
    )
}