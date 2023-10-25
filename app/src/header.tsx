import { Button, Container, Flex, Group, Menu } from "@mantine/core";
import { Link } from "react-router-dom";
import Home from "./home";

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
            {/* <Button component={Link} to={i.link}>{i.label}</Button>
            <a
                href={i.link}
                onClick={(e) => e.preventDefault()}
            >{i.label}</a> */}
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
                            <a>{menuItem.label}</a>
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