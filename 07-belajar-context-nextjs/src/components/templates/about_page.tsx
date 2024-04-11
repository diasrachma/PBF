import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPosts from "../organisms/allpost";

export default function AboutPage() {
    return(
        <Section2 isFancy={true}>
            <Heading>About Page</Heading>
            <Post
            title="Belajar Context"
            body="HAI!!!"
            />
            <AllPosts />
        </Section2>
    );
}