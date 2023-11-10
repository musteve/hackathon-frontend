import { Button } from "@mantine/core"
import GetBlogData from "../../http/blog/get-blog-data"
import Blog from "../../model/blog"

function ResetBlogButton(props: {
    setfunc: React.Dispatch<React.SetStateAction<Blog[]>>
}) {
    return (
        <Button 
            onClick={() => GetBlogData(props.setfunc)}
            mx="1rem"
        >Reset / Reload</Button>
    )
}

export default ResetBlogButton