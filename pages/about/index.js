import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import AboutMe from "../../components/about/AboutMe";
import Education from '../../components/about/Education';
import WorkExperience from '../../components/about/WorkExperience';

import data from "../../public/data.json";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const AboutData = data.pages.about;

const About = () => {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={3}>
                <Item>
                    <AboutMe />
                </Item>
            </Grid>
            <Grid item xs={5}>
                <Item>
                    <h2>Education</h2>
                    {AboutData.educations.map((item) => <Education key={item.id} instituteName={item.instituteName} courseName={item.courseName} startYear={item.startYear} endYear={item.endYear} />)}
                </Item>
                <Item>
                    <h2>Work Experience</h2>
                    {AboutData.workExperience.map((item) => <WorkExperience key={item.id} companyName={item.companyName} jobTitle={item.jobTitle} description={item.description} startYear={item.startYear} endYear={item.endYear} />)}
                </Item>
            </Grid>
        </Grid>
    );
}

export default About;