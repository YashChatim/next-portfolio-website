import { Fragment, useState } from "react";
import Link from "next/link";

import classes from './MainHeader.module.css';

const navLinks = [
    { name: "Home", Link: "/" },
    { name: "About", Link: "/about" },
    { name: "Projects", Link: "/projects" },
    { name: "Contact", Link: "mailto:chatim.yash@yahoo.co.uk" }
];

const MainHeader = () => {
    const [navLinksVisible, setNavLinksVisible] = useState(false);

    const displayHamburber = () => {
        return (
            <ul className={classes["nav-links"]}>
                <li className={classes["burger"]}>----</li>
                <li className={classes["burger"]}>----</li>
                <li className={classes["burger"]}>----</li>
            </ul>
        );
    };

    const displayNavLinks = () => {
        return (
            <ul className={classes["nav-links"]}>
                {navLinks.map((item) => <li key={item.name} className={classes["nav-link"]}><Link href={item.Link}>{item.name}</Link></li>)}
            </ul>
        );
    };

    return (
        <header className={classes["main-header"]}>
            <nav>
                <div onClick={() => setNavLinksVisible(!navLinksVisible)}>
                    {navLinksVisible ? displayNavLinks() : displayHamburber()}
                </div>
            </nav>
        </header>
    );
}

export default MainHeader;