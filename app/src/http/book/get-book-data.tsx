import Book from "../../model/book"

const GetBookData = async (func: React.Dispatch<React.SetStateAction<Book[]>>) => {
    try {
        const response = await fetch (
            "https://hackathon-backend-main-mxtuefqkua-uc.a.run.app/book",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
        const res: Book[] = await response.json()
        const addTagList = res.map((i) => {
            const tags = i.tag.split(",")
            i.tag_list = tags
            return i
        })
        func(addTagList)
    } catch (err) {
        console.log(err)
    }
}

export default GetBookData
