import { Button, Flex, Menu } from "@mantine/core";
import { Link } from "react-router-dom";

function Header() {
    const menuItem = {
        label: "Item",
        items: [
            {link: "/", label: "Home"},
            {link: "/books", label: "Books"},
            {link: "/blogs", label: "Blogs"},
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
                justify="space-between" m="1rem"
            >
                <Button variant="transparent" component={Link} to="/">UTTC Base</Button>
                <Flex
                    justify="center"
                    px="2rem"
                >
                    <Menu trigger="hover" openDelay={100} closeDelay={400}>
                        <Menu.Target>
                            <Button variant="light" color="gray">{menuItem.label}</Button>
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