import React from "react";
import '../../styles/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Grid } from "@mui/material";
//import all my imgs
//add an asset folder for my images
import MixingPot from '../../Assets/Mixing Pot.png'
import ParkingBuddy from '../../Assets/Parking Buddy.png'
import WeatherDashboard from '../../Assets/Weather Dashboard.png'

function ProjectList() {
    return (
        <div className="portfolioBG">
            <h2 className='portH2'>You can check out a few of the projects I have worked on and their GitHub below:</h2>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={6}>
                        <ProjectCard
                            className='projectCard'
                            imgPath={MixingPot}
                            title='Mixing Pot'
                            description='This is the description for Mixing Pot'
                            deployed='https://three-amigos-recipes.github.io/three-amigos-recipes/'
                            ghLink='https://github.com/three-amigos-recipes/three-amigos-recipes'
                            skills={['#HTML', '#JavaScript']}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <ProjectCard
                            className='projectCard'
                            imgPath={ParkingBuddy}
                            title='Parking Buddy'
                            description='Describe PB'
                            deployed='https://serene-cove-30368.herokuapp.com/'
                            ghLink='https://github.com/SMU-CodingBootcamp-Project2/ParkingBuddy'
                            skills={['#SQL', '#REST APIs', '#JavaScript']}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <ProjectCard
                            className='projectCard'
                            imgPath={WeatherDashboard}
                            title='Weather Dashboard'
                            description='This is the description for Weather Dashboard'
                            deployed='https://cbaldock2.github.io/Weather-Dashboard/'
                            ghLink='https://github.com/CBaldock2/Weather-Dashboard'
                            skills={['#REST APIs', '#JavaScript']}
                        />
                    </Grid>
                </Grid>

            </Container>
        </div>
    )
}

export default ProjectList