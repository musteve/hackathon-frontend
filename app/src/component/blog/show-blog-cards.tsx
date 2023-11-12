import { useEffect, useState } from "react"
import Blog from "../../model/blog"
import { Accordion, Badge, Button, Container, Flex, Space, Stack, Text, Title, UnstyledButton } from "@mantine/core"
import { IconExternalLink } from "@tabler/icons-react"
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
                <Stack mx="0.5rem">
                    <Flex justify="space-between">
                        <UnstyledButton c="dimmed" fz="xs">
                            last-update: {i.last_update_date} 
                        </UnstyledButton>
                        <Button 
                            component="a" 
                            href={i.url} 
                            size="xs"
                            variant="transparent"
                        >
                            <IconExternalLink />
                        </Button>
                    </Flex>

                    <UnstyledButton fz={"lg"} fw={800}>
                        {i.title}
                    </UnstyledButton>
                    
                    <Flex>
                        {i.tag_list.map((e) => (
                            <Badge fz="xs" fw={700} variant="light" mr="0.5rem">{e}</Badge>
                        ))}
                    </Flex>
                    <UnstyledButton fz="sm">
                        {i.author}
                    </UnstyledButton>
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
            <Space h="sm" />
            <Title ml="2rem">Blog</Title>
            <Space h="md" />
            <Text>Enjoy exploring contents!</Text>
            <BlogForm />
            <ResetBlogButton setfunc={setData}/>
            <SortBlog data={data} setfunc={setData}/>
            <FliterBlog data={data} setfunc={setData}/>
            <Accordion variant="contained">{createCards}</Accordion>
        </Container>
    )
}

export default ShowBlogCards