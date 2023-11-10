import { useEffect, useState } from "react"
import GetBookData from "../../http/book/get-book-data"
import Book from "../../model/book"
import { Accordion, Badge, Container, Flex, Stack, UnstyledButton } from "@mantine/core"
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
                <Stack mx="1rem">
                    <Flex justify="space-between" ml="1rem">
                        <UnstyledButton fz={"lg"} fw={800}>
                            {i.title}
                        </UnstyledButton>
                        <UnstyledButton c="dimmed">
                            last-update: {i.last_update_date} 
                        </UnstyledButton>
                    </Flex>
                    <Flex>
                        {i.tag_list.map((e) => (
                            <Badge fz="xs" fw={700} variant="light">{e}</Badge>
                        ))}
                    </Flex>
                    <Flex fz="sm">
                        {i.author}, {i.publisher}, {i.issue_date}
                    </Flex>
                </Stack>
            </Accordion.Control>
            <Accordion.Panel>
                <Stack>
                    <UnstyledButton>{i.description}</UnstyledButton>
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