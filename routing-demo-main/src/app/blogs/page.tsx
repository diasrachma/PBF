//link untuk blog 1 dan 2
import Link from "next/link";

export default function Blog() {
    return (
        <div>
            <h1>Blog List</h1>
            <ul>
                <li><Link href='/blogs/first'>Blog 1</Link></li>
                <li><Link href='blogs/second'>Blog 2</Link></li>
            </ul>
        </div>
    );
}