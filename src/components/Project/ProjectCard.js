import React from 'react';
import { Card, Button, CardMedia, CardContent, Typography, CardActions, IconButton } from '@mui/material';
import GitHubIcon from '@material-ui/icons/GitHub';

function ProjectCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                src={props.imgPath}
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
                <Button size='small' href={props.deployed}>View</Button>
                <IconButton size='small' href={props.ghLink}>
                    <GitHubIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default ProjectCard