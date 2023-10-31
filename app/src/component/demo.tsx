import { useDisclosure } from "@mantine/hooks"
import HelloWorld from "../http/get-hello-world"
import GetPersonalData from "../http/get-personal-data"
import { Button, Group, Modal, TextInput } from "@mantine/core"
import { useState } from "react"
import { useForm } from "@mantine/form"

function Demo() {
    return (
        <>
            <HelloWorld /> 
            <GetPersonalData />
            {/* <InputModal /> */}
            <InputForm />
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
                        age: age,
                    })
                }
            )
            console.log("succeded!")
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
                    <Button>close</Button>
                </form>
            </Modal>

            <Button onClick={open}>open</Button>
        </>
    )
}

// function InputModal() {
//     const [opened, {open, close}] = useDisclosure(false)
//     const [nameValue, setNameValue] = useState("")
//     const [nameErr, setNameErr] = useState("")

//     return (
//         <>
//             <Modal
//                 opened={opened}
//                 onClose={close} 
//                 title="test"
//             >
//                 <TextInput
//                     label="Name"
//                     description="1-50 characters"
//                     value={nameValue}
//                     onChange={(e) => setNameValue(e.currentTarget.value)}
//                     error={nameErr}
//                 ></TextInput>
//                 <Button
//                     onClick={() => {
//                         if (nameValue.length == 0) {
//                             setNameErr("enter your name")
//                         } else if (nameValue.length > 50) {
//                             setNameErr("too long name")
//                         } else {
//                             setNameErr("")
//                             {close}
//                         }
//                     }}
//                 >Submit</Button>
//             </Modal>

//             <Button
//                 onClick={open}
//             >Add Data</Button>
//             <p>{nameValue}</p>
//             <p>{nameValue.length}{nameErr}</p>
//         </>
//     )
// }