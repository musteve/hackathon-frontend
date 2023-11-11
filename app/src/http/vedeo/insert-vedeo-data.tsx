import Vedeo from "../../model/vedeo"

const InsertVedeoData = async (data: Vedeo) => {
    try {
        console.log("posting...")
        await fetch(
            "https://hackathon-backend-main-mxtuefqkua-uc.a.run.app/vedeo",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: data.title,
                    author: data.author,
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

export default InsertVedeoData