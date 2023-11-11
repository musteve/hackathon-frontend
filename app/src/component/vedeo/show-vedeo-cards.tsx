import { Accordion, Badge, Button, Container, Flex, Stack, UnstyledButton } from "@mantine/core"
import { IconExternalLink } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import Vedeo from "../../model/vedeo"
import GetVedeoData from "../../http/vedeo/get-vedeo-data"

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
                            <Badge fz="xs" fw={700} variant="light">{e}</Badge>
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
            <VedeoForm />
            <ResetVedeoButton setfunc={setData}/>
            <SortVedeo data={data} setfunc={setData}/>
            <FliterVedeo data={data} setfunc={setData}/>
            <Accordion variant="contained">{createCards}</Accordion>
        </Container>
    )
}

export default ShowVedeoCards