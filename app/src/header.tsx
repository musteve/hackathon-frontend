import { Button, Group, Menu } from "@mantine/core";
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
        <Menu.Item key={i.label}>
            <Button component={Link} to={i.link}>{i.label}</Button>
        </Menu.Item>
    ))


    return (
        <header>
            <Group>
                <Button component={Link} to="/">Home</Button>
                <Menu trigger="hover" openDelay={100} closeDelay={400}>
                    <Menu.Target>
                        <div>{menuItem.label}</div>
                    </Menu.Target>
                    <Menu.Dropdown>
                        {menuItemItems}
                    </Menu.Dropdown>
                </Menu>
            </Group>
        </header>
    )
}

export default Header