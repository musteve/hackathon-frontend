import { Button, Stack, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";

function Page404() {
    return (
        <Stack align="center" mt="2rem">
            <Title fw={1000}>404</Title>
            <Text c="dimmed" fw={700}>You have found a secret site.</Text>
            <Button
                component={Link}
                to="/"
            >Junp to Home</Button>
        </Stack>
    )
}

export default Page404