import { useDisclosure } from "@mantine/hooks"
import HelloWorld from "../component/demo/get-hello-world"
import GetPersonalData from "../component/demo/get-personal-data"
import { Button, Flex, Modal, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"

function Demo() {
    return (
        <>
            <HelloWorld />
            <Flex>
                <InputForm />
            </Flex>
            <GetPersonalData />
        </>
    )
}

export default Demo




function InputForm() {
    const addUser = async (name: string, age: string) => {
        try{
            console.log("posting...")
            await fetch(
                "https://hackathon-backend-main-mxtuefqkua-uc.a.run.app/adduser",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name,
                        age: Number(age),
                    })
                }
            )
        } catch (err) {
            console.log(err)
        }
    }


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
                    onSubmit={form.onSubmit((values) => {addUser(values.name, values.age)})}
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
