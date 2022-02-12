import { Fragment } from "react";
import Link from "next/link";

const Index = () => {
    return (
        <Fragment>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
            </ul>
            <div>Welcome to Index page</div>
        </Fragment>
    );
}

export default Index;