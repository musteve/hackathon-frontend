import { Button, Menu } from "@mantine/core";
import { Link } from "react-router-dom";

function Header() {
    const menuItem = {
        label: "Item",
        items: [
            {link: "/book", label: "Book"},
            {link: "/", label: "Home"}
        ]
    }
    const menuItemItems = menuItem.items.map((i) => (
        <Menu.Item key={i.label}>
            <Button component={Link} to={i.link}>{i.label}</Button>
        </Menu.Item>
    ))


    return (
        <header>
            <Menu trigger="hover" openDelay={100} closeDelay={400}>
                <Menu.Target>
                    <div>{menuItem.label}</div>
                </Menu.Target>
                <Menu.Dropdown>
                    {menuItemItems}
                </Menu.Dropdown>
            </Menu>
        </header>
    )
}

export default Header