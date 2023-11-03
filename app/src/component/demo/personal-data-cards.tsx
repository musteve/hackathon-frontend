import { Accordion, Button, Stack, UnstyledButton } from "@mantine/core";
import PersonalData from "./type-personal-data";
import DeleteButton from "./delete-button";
import EditPersonalData from "./edit-personal-data";

function PersonalDataCards(props: {data: PersonalData[]}) {

    const createCards = props.data.map((item) => (
        <Accordion.Item key={item.id} value={item.name}>
            <Accordion.Control>
                {item.name}
            </Accordion.Control>
            <Accordion.Panel>
                <Stack>
                    <UnstyledButton>{item.id}</UnstyledButton>
                    <UnstyledButton>{item.name}</UnstyledButton>
                    <UnstyledButton>{item.age}</UnstyledButton>

                    <EditPersonalData data={item} />
                    <DeleteButton id={item.id} />
                </Stack>
            </Accordion.Panel>
        </Accordion.Item>
    ))

    return (
        <Accordion variant="contained">{createCards}</Accordion>
    )
}

export default PersonalDataCards