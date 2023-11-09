import { Button, Modal, TextInput } from "@mantine/core"
import { hasLength, isInRange, useForm } from "@mantine/form"
import { useDisclosure } from "@mantine/hooks"
import AddPersnalData from "../../http/demo/add-personal-data"

function InputForm() {
    const [opened, {open, close}] = useDisclosure(false)

    const form = useForm({
        initialValues: {
            name: "",
            age: "",
        },
        validate: {
            name: hasLength({min: 1, max: 50}, "Name must be 1-10 characters long"),
            age: hasLength({min: 1, max: 3}, "age must be between 1-999")
        },
        validateInputOnChange: true
    })

    return (
        <>
            <Modal opened={opened} onClose={close}>
                <form 
                    onSubmit={form.onSubmit((values) => {
                        AddPersnalData(values.name, values.age)
                        close()
                    })}
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
                    <Button type="submit">submit</Button>
                </form>
            </Modal>

            <Button onClick={open}>open</Button>
        </>
    )
}

export default InputForm