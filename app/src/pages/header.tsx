import { Button, Flex, Menu } from "@mantine/core";
import { Link } from "react-router-dom";
import SignoutButton from "../component/auth/signout-button";
import { useAuthContext } from "../context/auth-context";
import SignupEmail from "../component/auth/signup-email";
import SigninGoogle from "../component/auth/signin-google";
import SigninEmail from "../component/auth/signin-email";

function Header() {
    const loginUser = useAuthContext()
    const menuItem = {
        label: "Item",
        items: [
            {link: "/", label: "Home"},
            {link: "/books", label: "Books"},
            {link: "/blogs", label: "Blogs"},
            {link: "/vedeos", label: "Vdeos"},
            {link: "/curriculums", label: "Curriculum"},
            {link: "/demo", label: "Demo"}
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
                mt="1rem"
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
                    {loginUser 
                    ? <SignoutButton />
                    : <>
                        <SignupEmail /> 
                        <SigninEmail />
                        <SigninGoogle /> 
                    </>}

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