import { useEffect, useState } from "react"
import GetBookData from "../../http/book/get-book-data"
import Book from "../../model/book"
import { Accordion, Container, Flex, Stack, UnstyledButton } from "@mantine/core"
import DeleteBookButton from "./delete-book-button"
import EditBookButton from "./edit-book-button"
import BookForm from "./book-form"
import ResetBookButton from "./reset-book-butoon"
import SortBook from "./sort-book"
import FliterBook from "./filter-book"

function ShowBookCards() {
    const [data, setData] = useState<Book[]>([])
    
    useEffect(() => {
        GetBookData(setData)
    }, [])

    const createCards = data.map((i) => (
        <Accordion.Item key={i.id} value={i.title}>
            <Accordion.Control>
                {i.title}, last-update:{i.last_update_date}
            </Accordion.Control>
            <Accordion.Panel>
                <Stack>
                    <UnstyledButton>
                        author: {i.author}, 
                        publisher: {i.publisher}, 
                        issue_date: {i.issue_date}
                    </UnstyledButton>
                    <UnstyledButton>tag: {i.tag}</UnstyledButton>
                    <UnstyledButton>description: {i.description}</UnstyledButton>
                    <Flex>
                        <EditBookButton data={i}/>
                        <DeleteBookButton id={i.id}/>
                    </Flex>
                </Stack>
            </Accordion.Panel>
        </Accordion.Item>
    ))

    return (
        <Container>
            <BookForm />
            <ResetBookButton setfunc={setData}/>
            <SortBook data={data} setfunc={setData}/>
            <FliterBook data={data} setfunc={setData}/>
            <Accordion variant="contained">{createCards}</Accordion>
        </Container>
    )
}

export default ShowBookCards