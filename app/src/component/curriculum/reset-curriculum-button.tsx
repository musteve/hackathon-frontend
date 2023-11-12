import { Button } from "@mantine/core"
import Curriculum from "../../model/curriculum"
import GetCurriculumData from "../../http/curriculum/get-curriculum-data."

function ResetCurriculumButton(props: {
    setfunc: React.Dispatch<React.SetStateAction<Curriculum[]>>
}) {
    return (
        <Button 
            onClick={() => GetCurriculumData(props.setfunc)}
            mx="1rem"
        >Reset / Reload</Button>
    )
}

export default ResetCurriculumButton