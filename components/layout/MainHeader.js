import { Fragment } from "react";
import Link from "next/link";

const MainHeader = () => {
    return (
        <Fragment>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
            </ul>
        </Fragment>
    );
}

export default MainHeader;