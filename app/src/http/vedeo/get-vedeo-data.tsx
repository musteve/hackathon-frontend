import Vedeo from "../../model/vedeo"

const GetVedeoData = async (func: React.Dispatch<React.SetStateAction<Vedeo[]>>) => {
    try {
        const response = await fetch (
            "https://hackathon-backend-main-mxtuefqkua-uc.a.run.app/vedeo",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
        const res: Vedeo[] = await response.json()
        const addTagList = res.map((i) => {
            const tags = i.tag.split(",")
            tags.sort((a, b) => {if (a > b) return 1; else return -1})
            i.tag_list = tags
            return i
        })
        func(addTagList)
    } catch (err) {
        console.log(err)
    }
}

export default GetVedeoData
