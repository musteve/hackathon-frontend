import { Button, Flex, Menu, UnstyledButton } from "@mantine/core";
import { Link } from "react-router-dom";

function Header() {
    const menuItem = {
        label: "Item",
        items: [
            {link: "/", label: "Home"},
            {link: "/books", label: "Books"},
            {link: "/demo", label: "demo"}
        ]
    }
    const menuItemItems = menuItem.items.map((i) => (
        <Menu.Item component={Link} to={i.link}>
            {i.label}
        </Menu.Item>
    ))


    return (
        <header>
            <Flex 
                justify="space-between"
            >
                <Button variant="transparent" component={Link} to="/">Home</Button>
                <Flex
                    justify="flex-end"
                >
                    <Menu trigger="hover" openDelay={100} closeDelay={400}>
                        <Menu.Target>
                            <UnstyledButton>{menuItem.label}</UnstyledButton>
                        </Menu.Target>
                        <Menu.Dropdown>
                            {menuItemItems}
                        </Menu.Dropdown>
                    </Menu>
                </Flex>
            </Flex>
        </header>
    )
}

export default Header