import { Button } from "@mantine/core"
import GetVedeoData from "../../http/vedeo/get-vedeo-data"
import Vedeo from "../../model/vedeo"

function ResetVedeoButton(props: {
    setfunc: React.Dispatch<React.SetStateAction<Vedeo[]>>
}) {
    return (
        <Button 
            onClick={() => GetVedeoData(props.setfunc)}
            mx="1rem"
        >Reset / Reload</Button>
    )
}

export default ResetVedeoButton