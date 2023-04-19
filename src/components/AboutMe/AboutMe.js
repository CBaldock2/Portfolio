import React from "react";
import '../../styles/style.css';
import Text from "./Text";
import { Container, Grid } from "@mui/material";

function About() {
    return (
        <div className='aboutMeBG'>
            <Container>
                <Grid item xs={8}>
                    <h2 className='typewriter'><Text/></h2>
                    <p className='aboutMe'>Talk about how awesome I am</p>
                </Grid>
            </Container>
        </div>
    )
}

export default About