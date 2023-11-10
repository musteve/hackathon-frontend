import { useEffect, useState } from "react"
import Blog from "../../model/blog"
import { Accordion, Badge, Button, Container, Flex, Stack, UnstyledButton } from "@mantine/core"
import { IconExternalLink } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import GetBlogData from "../../http/blog/get-blog-data"
import EditBlogButton from "./edit-blog-button"
import DeleteBlogButton from "./delete-blog-button"
import BlogForm from "./blog-form"
import ResetBlogButton from "./reset-blog-button"
import SortBlog from "./sort-blog-button"
import FliterBlog from "./filter-blog"

function ShowBlogCards() {
    const [data, setData] = useState<Blog[]>([])
    
    useEffect(() => {
        GetBlogData(setData)
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
                    <UnstyledButton fz="sm">
                        {i.author}
                    </UnstyledButton>
                    <Button component={Link} to={i.url}>
                        <IconExternalLink />
                    </Button>
                </Stack>
            </Accordion.Control>
            <Accordion.Panel>
                <Stack>
                    <UnstyledButton>{i.description}</UnstyledButton>
                    <Flex>
                        <EditBlogButton data={i}/>
                        <DeleteBlogButton id={i.id}/>
                    </Flex>
                </Stack>
            </Accordion.Panel>
        </Accordion.Item>
    ))

    return (
        <Container>
            <BlogForm />
            <ResetBlogButton setfunc={setData}/>
            <SortBlog data={data} setfunc={setData}/>
            <FliterBlog data={data} setfunc={setData}/>
            <Accordion variant="contained">{createCards}</Accordion>
        </Container>
    )
}

export default ShowBlogCards