import React from "react";
import '../../styles/style.css';
import Text from "./Text";
import { Container, Grid } from "@mui/material";

function About() {
    return (
        <div className='aboutmebg'>
            <Container>
                <Grid item xs={8}>
                    <div><Text/></div>
                </Grid>
            </Container>
        </div>
    )
}

export default About