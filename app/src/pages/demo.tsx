import HelloWorld from "../component/demo/get-hello-world"
import GetPersonalData from "../component/demo/get-personal-data"
import InputForm from "../component/demo/input-form"
import PersonalDataCards from "../component/demo/personal-data-cards"

function Demo() {
    return (
        <>
            <HelloWorld />
            <InputForm />
            <PersonalDataCards data={GetPersonalData()} />
        </>
    )
}

export default Demo




