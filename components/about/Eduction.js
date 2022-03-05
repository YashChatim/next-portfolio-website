import { Fragment } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Institution = [
    {
        id: 1,
        instituteName: "The University of Sheffield",
        courseName: "BEng - Aerospace Engineering",
        startYear: 2015,
        endYear: 2018
    },
    {
        id: 2,
        instituteName: "Wembley High Technology College",
        courseName: "Mathematics, Physics, Further mathematics and IT",
        startYear: 2013,
        endYear: 2015
    }
];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Eduction = () => {
    return (
        <Fragment>
            <h2>Eduction</h2>
            {Institution.map(item => 
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <Item>
                            {item.startYear} - {item.endYear}
                        </Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>
                            {item.instituteName}
                        </Item>
                        <Item>
                            {item.courseName}
                        </Item>
                    </Grid>
                </Grid>
            )}
        </Fragment>
    );
}

export default Eduction;