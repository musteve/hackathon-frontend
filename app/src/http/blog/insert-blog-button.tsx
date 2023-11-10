import Blog from "../../model/blog"

const InsertBlogData = async (data: Blog) => {
    try {
        console.log("posting...")
        await fetch(
            "https://hackathon-backend-main-mxtuefqkua-uc.a.run.app/book",
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

export default InsertBlogData