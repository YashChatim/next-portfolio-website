import { Fragment } from "react";
import Link from "next/link";

const About = () => {
    return (
        <Fragment>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
            </ul>
            <div>Welcome to About page</div>
        </Fragment>
    );
}

export default About;