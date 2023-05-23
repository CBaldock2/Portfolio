import React from "react";
import '../../styles/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Grid } from "@mui/material";
//import all my imgs
//add an asset folder for my images
import MixingPot from '../../Assets/Mixing Pot.png'
import ParkingBuddy from '../../Assets/Parking Buddy.png'
import WeatherDashboard from '../../Assets/Weather Dashboard.png'
import Jolt from '../../Assets/JOLT-logo.png'

function ProjectList() {
    return (
        <div className="portfolioBG">
            <h2 className='portH2'>You can check out a few of the projects I have worked on and their GitHub below:</h2>
            <Container>
                <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={6}>
                        <ProjectCard
                            className='projectCard'
                            imgPath={Jolt}
                            title='Jolt'
                            description='Jolt is a personal finance tracker that lets you track your account balance, set goals, allocate funds and see recent transactions.'
                            deployed='https://jolt2.herokuapp.com/'
                            ghLink='https://github.com/Jolt3/Jolt'
                            skills={['#React','#Components', '#ChartJS']}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <ProjectCard
                            className='projectCard'
                            imgPath={MixingPot}
                            title='Mixing Pot'
                            description='Mixing Pot is an application where you can search for recipes based on ingredients you input. If you like a recipe and go to the website to see how to make the meal it will be saved to a "Previous Recipes" page where you can find it and create it again!'
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
                            description='Parking Buddy lets a user easily request a guest parking spot at the appartment complex they stay at. You can also see any parking spots associated with your account.'
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
                            description='The Weather Dashboard allows a user to look up a city and displays a 7-day forcast.'
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