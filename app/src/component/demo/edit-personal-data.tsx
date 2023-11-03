import { Button, Modal, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { useDisclosure } from "@mantine/hooks"
import PersonalData from "./type-personal-data"
import UpdatePersonalData from "../../http/demo/update-personal-data"

function EditPersonalData(props: {data: PersonalData}) {
    const [opened, {open, close}] = useDisclosure(false)

    const form = useForm({
        initialValues: {
            name: props.data.name,
            age: props.data.age
        },
    })
    return (
        <>
            <Modal opened={opened} onClose={close} title="edit">
                <form
                    onSubmit={form.onSubmit((values) => {
                        UpdatePersonalData(props.data.id, values.name, values.age)
                    })}
                >
                    <TextInput
                        label="name"
                        {...form.getInputProps("name")}
                    ></TextInput>
                    <TextInput
                        label="age"
                        {...form.getInputProps("age")}
                    ></TextInput>
                    <Button type="submit" onClick={close}>update</Button>
                </form>
            </Modal>

            <Button onClick={open}>edit</Button>
        </>
    )
}

export default EditPersonalData