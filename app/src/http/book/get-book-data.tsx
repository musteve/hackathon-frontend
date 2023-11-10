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
        func(await response.json())
    } catch (err) {
        console.log(err)
    }
}

export default GetBookData

