import { useState } from "react";
import Link from "next/link";

import classes from './MainHeader.module.css';

import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
    { name: "Home", Link: "/" },
    { name: "About", Link: "/about" },
    { name: "Projects", Link: "/projects" },
    { name: "Contact", Link: "mailto:chatim.yash@yahoo.co.uk" }
];

const MainHeader = () => {
    const [navLinksVisible, setNavLinksVisible] = useState(false);

    const displayNavLinks = () => {
        return (
            <ul className={classes["nav-links"]}>
                <CloseIcon className={classes["nav-link"]}onClick={() => setNavLinksVisible(!navLinksVisible)}>X</CloseIcon>
                {navLinks.map((item) => <li key={item.name} className={classes["nav-link"]}><Link href={item.Link}>{item.name}</Link></li>)}
            </ul>
        );
    };

    return (
        <AppBar className={classes["appBar"]}>
            <Toolbar className={classes["toolbar"]}>
                <IconButton onClick={() => setNavLinksVisible(!navLinksVisible)}
                    size="medium"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    {navLinksVisible ? displayNavLinks() : <MenuIcon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default MainHeader;