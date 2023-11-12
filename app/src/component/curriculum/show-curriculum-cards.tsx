import { useEffect, useState } from "react"
import Curriculum from "../../model/curriculum"
import { Accordion, Badge, Button, Container, Flex, Space, Stack, Text, Title, UnstyledButton } from "@mantine/core"
import { IconExternalLink } from "@tabler/icons-react"
import EditCurriculumButton from "./edit-curriculum-button"
import DeleteCurriculumButton from "./delete-curriculum-button"
import CurriculumForm from "./curriculum-form"
import ResetCurriculumButton from "./reset-curriculum-button"
import SortCurriculum from "./sort-curriculum-button"
import GetCurriculumData from "../../http/curriculum/get-curriculum-data."
import FliterCurriculum from "./fliter-curriculum"

function ShowCurriculumCards() {
    const [data, setData] = useState<Curriculum[]>([])
    
    useEffect(() => {
        GetCurriculumData(setData)
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
                    <UnstyledButton fz="sm" fw={600}>
                        CHAPTER: {i.chapter}
                    </UnstyledButton>
                </Stack>
            </Accordion.Control>
            <Accordion.Panel>
                <Stack>
                    <UnstyledButton>{i.description}</UnstyledButton>
                    <Flex>
                        <EditCurriculumButton data={i}/>
                        <DeleteCurriculumButton id={i.id}/>
                    </Flex>
                </Stack>
            </Accordion.Panel>
        </Accordion.Item>
    ))

    return (
        <Container>
            <Space h="sm" />
            <Title ml="2rem">Curriculum</Title>
            <Space h="md" />
            <Text>Enjoy exploring contents!</Text>
            <CurriculumForm />
            <ResetCurriculumButton setfunc={setData}/>
            <SortCurriculum data={data} setfunc={setData}/>
            <FliterCurriculum data={data} setfunc={setData}/>
            <Accordion variant="contained">{createCards}</Accordion>
        </Container>
    )
}

export default ShowCurriculumCards