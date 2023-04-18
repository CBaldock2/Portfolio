import React from "react";
import '../../styles/style.css';
import ProjectCard from "./ProjectCard";
import { Card, CardActions, CardContent, Container, Grid, IconButton, Typography, CardMedia } from "@mui/material";
import GitHubIcon from '@material-ui/icons/GitHub';
//import all my imgs
//add an asset folder for my images

function ProjectList() {
    return (
        <div>
            <Container>
                <Grid item xs={6}>
                    <ProjectCard
                        // imgPath={/* needs to be imported */}
                        title='Mixing Pot'
                        description='This is the description for Mixing Pot'
                        deployed='https://three-amigos-recipes.github.io/three-amigos-recipes/'
                        ghLink='https://github.com/three-amigos-recipes/three-amigos-recipes'
                    />
                </Grid>
                <Grid item xs={6}>
                    
                    <Card sx={{ maxWidth: 345 }}>
                         <CardMedia
                            sx={{ height: 140 }}
                            src='' //needs to be imported
                            alt='card-img'
                        /> 
                        <CardContent>
                            <Typography>
                            Parking Buddy
                            </Typography>
                            <Typography>
                            This is the description for Parking Buddy
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton size='small' href='https://github.com/SMU-CodingBootcamp-Project2/ParkingBuddy'>
                                <GitHubIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <ProjectCard
                        // imgPath={/* needs to be imported */}
                        title='Weather Dashboard'
                        description='This is the description for Weather Dashboard'
                        deployed='https://cbaldock2.github.io/Weather-Dashboard/'
                        ghLink='https://github.com/CBaldock2/Weather-Dashboard'
                    />
                </Grid>
            </Container>
        </div>
    )
}

export default ProjectList