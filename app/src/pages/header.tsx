import { Button, Flex, Menu } from "@mantine/core";
import { Link } from "react-router-dom";
import LogoutButton from "../component/auth/logout-button";
import { useAuthContext } from "../context/auth-context";

function Header() {
    const loginUser = useAuthContext()
    const menuItem = {
        label: "Item",
        items: [
            {link: "/", label: "Home"},
            {link: "/books", label: "Books"},
            {link: "/blogs", label: "Blogs"},
            {link: "/vedeos", label: "Vdeos"},
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
                justify="space-between" my="1rem"
            >
                <Button 
                    component={Link} 
                    to="/"
                    variant="transparent" 
                    fz="xl"
                    fw={900}
                    pl="2rem" 
                >UTTC Base</Button>
                <Flex
                    justify="center"
                    pr="1rem"
                >
                    {loginUser ? <LogoutButton />: null}
                    <Menu trigger="hover" openDelay={100} closeDelay={400}>
                        <Menu.Target>
                            <Button 
                                variant="light" 
                                color="gray"
                                fw={700}
                            >{menuItem.label}</Button>
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