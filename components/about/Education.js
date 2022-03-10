import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Education = (props) => {
    return (
        <Grid container key={props.id} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={4}>
                <Item>
                    {props.startYear} - {props.endYear}
                </Item>
            </Grid>
            <Grid item xs={8}>
                <Item>
                    {props.instituteName}
                </Item>
                <Item>
                    {props.courseName}
                </Item>
            </Grid>
        </Grid>
    );
}

export default Education;