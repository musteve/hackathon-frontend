import { Button, Flex, Modal, PasswordInput, ScrollArea, TextInput } from "@mantine/core"
import { hasLength, matches, useForm } from "@mantine/form"
import { useDisclosure } from "@mantine/hooks"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { fireAuth } from "../../firebase"

function SignupEmail() {
    const [opened, {open, close}] = useDisclosure(false)

    const form = useForm({
        initialValues: {
            email: "",
            password: ""
        },
        validate: {
            email: matches(/^\S+@\S+$/, "Enter email adress"),
            password: hasLength({min: 6, max: 20}, "Password length must be 6-20")
        },
        validateInputOnChange: true,
    })

    const signupWithEmail = (data: {email: string, password: string}) => {
        createUserWithEmailAndPassword(fireAuth, data.email, data.password)
            .then(res => {
                const user = res.user
                alert("Login user: " + user.displayName)
            })
            .catch(err => {
                const errorMessage = err.message
                alert(errorMessage)
            })
    }

    return (
        <>
        <Modal opened={opened} onClose={close}>
            <ScrollArea>
                <form
                    onSubmit={form.onSubmit((values) => {
                        signupWithEmail(values)
                        close()
                    })}
                >
                    <TextInput label="Email address" {...form.getInputProps("email")} />
                    <PasswordInput label="password" {...form.getInputProps("password")} />
                    <Flex justify="flex-end" mt="1rem">
                        <Button type="submit">Sign up</Button>
                    </Flex>
                </form>
            </ScrollArea>
        </Modal>
        <Button 
            onClick={open}
            variant="light" 
            color="gray"
            fw={700}
            mr="0.5rem"
        >
            Sign up
        </Button>
        </>
    )

}

export default SignupEmail