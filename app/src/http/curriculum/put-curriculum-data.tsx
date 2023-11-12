import Curriculum from "../../model/curriculum"

const PutCurriculumData = async (data: Curriculum) => {
    try {
        console.log("updateing...")
        await fetch(
            "https://hackathon-backend-main-mxtuefqkua-uc.a.run.app/curriculum",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: data.id,
                    title: data.title,
                    chapter: data.chapter,
                    url: data.url,
                    tag: data.tag,
                    description: data.description,
                })
            }
        )
    } catch (err) {
        console.log(err)
    }
}

export default PutCurriculumData