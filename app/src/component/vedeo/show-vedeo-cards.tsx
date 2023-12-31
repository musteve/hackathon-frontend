import { Accordion, Badge, Button, Container, Flex, Space, Stack, Text, Title, UnstyledButton } from "@mantine/core"
import { IconExternalLink } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import Vedeo from "../../model/vedeo"
import GetVedeoData from "../../http/vedeo/get-vedeo-data"
import EditVedeoButton from "./edit-vedeo-button"
import DeleteVedeoButton from "./delete-vedeo-button"
import VedeoForm from "./vedeo-form"
import ResetVedeoButton from "./reset-vedeo-button"
import FliterVedeo from "./fliter-vedeo-button"
import SortVedeo from "./sort-vdeo-button"

function ShowVedeoCards() {
    const [data, setData] = useState<Vedeo[]>([])
    
    useEffect(() => {
        GetVedeoData(setData)
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
                        <EditVedeoButton data={i}/>
                        <DeleteVedeoButton id={i.id}/>
                    </Flex>
                </Stack>
            </Accordion.Panel>
        </Accordion.Item>
    ))

    return (
        <Container>
            <Space h="sm" />
            <Title ml="2rem">Vedeo</Title>
            <Space h="md" />
            <Text>Enjoy exploring contents!</Text>
            <VedeoForm />
            <ResetVedeoButton setfunc={setData}/>
            <SortVedeo data={data} setfunc={setData}/>
            <FliterVedeo data={data} setfunc={setData}/>
            <Accordion variant="contained">{createCards}</Accordion>
        </Container>
    )
}

export default ShowVedeoCards