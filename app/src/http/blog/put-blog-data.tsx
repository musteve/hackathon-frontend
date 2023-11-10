import Blog from "../../model/blog"

const PutBlogData = async (data: Blog) => {
    try {
        console.log("updateing...")
        await fetch(
            "https://hackathon-backend-main-mxtuefqkua-uc.a.run.app/blog",
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

export default PutBlogData