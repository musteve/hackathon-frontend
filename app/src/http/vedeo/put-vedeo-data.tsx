import Vedeo from "../../model/vedeo"

const PutVedeoData = async (data: Vedeo) => {
    try {
        console.log("updateing...")
        await fetch(
            "https://hackathon-backend-main-mxtuefqkua-uc.a.run.app/vedeo",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: data.id,
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

export default PutVedeoData