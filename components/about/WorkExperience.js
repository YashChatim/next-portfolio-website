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

const WorkExperience = (props) => {
    return (
        <Grid container key={props.id} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={4}>
                <Item>
                    {props.companyName}
                </Item>
                <Item>
                    {props.startYear} - {props.endYear}
                </Item>
            </Grid>
            <Grid item xs={8}>
                <Item>
                    {props.jobTitle}
                </Item>
                <Item>
                    {props.description.point1}
                </Item>
                <Item>
                    {props.description.point2}
                </Item>
                <Item>
                    {props.description.point3}
                </Item>
                <Item>
                    {props.description.point4}
                </Item>
                <Item>
                    {props.description.point5}
                </Item>
                <Item>
                    {props.description.point6}
                </Item>
            </Grid>
        </Grid>
    );
}

export default WorkExperience;