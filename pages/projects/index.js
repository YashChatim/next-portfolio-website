import { Fragment } from "react";
import Link from "next/link";

const Projects = () => {
    return (
        <Fragment>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
            </ul>
            <div>Welcome to Projects page</div>
        </Fragment>
    );
}

export default Projects;