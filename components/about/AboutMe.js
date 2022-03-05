import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const AboutMe = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                image="https://i.pinimg.com/originals/fc/4f/72/fc4f726b36792d548f77896de0568a3a.jpg"
                alt="Profile picture"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    I am a proficient frontend web developer with knowledge and competency in backend.
                    I have 3 years of academic experience in Javascript as well as 2 years in python, C# and Matlab.
                    Additionally, I have 2 years of self-assigned experience working with the entire frontend pipeline
                    which I have demonstrated through independent projects. My passion for development makes me a selfsufficient
                    candidate eager to adapt to up-coming technologies and as such, refining my knowledge and skills further through
                    professional experience.
                </Typography>
            </CardContent>
        </Card>
    );
}

export default AboutMe;