import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import RecentPosts from "../molecules/recentpost";

export default function AllPosts(){
    return(
        <Section2 isFancy={true}>
            <Heading>Posts</Heading>
            <Post
            title="Nama : "
            body="Dias Rachma Rosalina"
            />
            <Post
            title="NIM : "
            body="2341727003"
            />
            <RecentPosts />
        </Section2>
    );
}