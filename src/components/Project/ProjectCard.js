import React from 'react';
import { Card, Button, CardMedia, CardContent, Typography, CardActions, IconButton, Chip } from '@mui/material';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../../styles/style.css'

function ProjectCard(props) {
    return (
        <Card sx={{ maxWidth: 550 }}>
            <CardMedia
                sx={{ height: 215 }}
                image={props.imgPath}
                alt='card-img'
            />
            <CardContent>
                <Typography>
                    {props.title}
                </Typography>
                <Typography>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <div className='cardLinks'>
                    <Button size='small' href={props.deployed}>View</Button>
                    <IconButton size='small' href={props.ghLink}>
                        <GitHubIcon />
                    </IconButton>
                </div>
                <div className='chipsContainer'>
                    {Array.isArray(props.skills) && props.skills.map((skill) => (
                        <Chip key={skill} label={skill} className='projectSkill'
                        />
                    ))}
                </div>
            </CardActions>
        </Card>
    )
}

export default ProjectCard