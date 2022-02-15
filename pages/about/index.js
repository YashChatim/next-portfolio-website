import { Fragment } from "react";
import Link from "next/link";

import MainHeader from "../../components/layout/MainHeader";

const About = () => {
    return (
        <Fragment>
            <MainHeader />
            <div>Welcome to About page</div>
        </Fragment>
    );
}

export default About;