import Book from "../../model/book"

const PutBookData = async (data: Book) => {
    try {
        console.log("updateing...")
        await fetch(
            "https://hackathon-backend-main-mxtuefqkua-uc.a.run.app/book",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: data.id,
                    title: data.title,
                    author: data.author,
                    issue_date: data.issue_date,
                    publisher: data.publisher,
                    tag: data.tag,
                    description: data.description,
                })
            }
        )
    } catch (err) {
        console.log(err)
    }
}

export default PutBookData