import { Button, Modal, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { useDisclosure } from "@mantine/hooks"
import AddPersnalData from "./add-personal-data"

function InputForm() {
    const [opened, {open, close}] = useDisclosure(false)

    const form = useForm({
        initialValues: {
            name: "",
            age: "",
        },
    })

    return (
        <>
            <Modal opened={opened} onClose={close}>
                <form 
                    onSubmit={form.onSubmit((values) => {AddPersnalData(values.name, values.age)})}
                >
                    <TextInput
                        label="name"
                        placeholder="your name"
                        {...form.getInputProps("name")}
                    ></TextInput>
                    <TextInput
                        label="age"
                        placeholder="your age"
                        {...form.getInputProps("age")}
                    ></TextInput>
                    <Button type="submit" onClick={close}>submit</Button>
                </form>
            </Modal>

            <Button onClick={open}>open</Button>
        </>
    )
}

export default InputForm