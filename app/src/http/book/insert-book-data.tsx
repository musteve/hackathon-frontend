import Book from "../../model/book"

const InsertBookData = async (data: Book) => {
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
                    issue_date: data.issue_date,
                    publisher: data.publisher,
                    description: data.description,
                    tag: data.tag,
                })
            }
        )
    } catch (err) {
        console.log(err)
    }
}

export default InsertBookData