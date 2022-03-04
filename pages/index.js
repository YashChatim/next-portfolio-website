import { Fragment } from "react";
import Grid from '@material-ui/core/Grid';
import { Paper } from "@material-ui/core";

import classes from '../styles/landing/landing.module.css';

const Index = () => {
    return (
        <Fragment>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Paper className={classes['paper']}></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={`${classes['paper']} ${classes['banner-text']}`}>
                        <h1>YASH CHATIM</h1>
                        <h2>D E V E L O P E R  /  P R O G R A M M E R</h2>
                        <hr /> {/* hr - thematic break in HTML e.g. topic change */}
                    </Paper>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Index;