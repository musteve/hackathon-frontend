import { Button } from "@mantine/core"
import GetBookData from "../../http/book/get-book-data"
import Book from "../../model/book"

function ResetBookButton(props: {
    setfunc: React.Dispatch<React.SetStateAction<Book[]>>
}) {
    return (
        <Button 
            onClick={() => GetBookData(props.setfunc)}
            mx="1rem"
        >Reset / Reload</Button>
    )
}

export default ResetBookButton