import React from "react";
import '../../styles/style.css'
import Text from "./Text";
import { Container, Grid } from "@mui/material";

function About() {
    return (
        <div className='aboutmebg'>
            <Container container spacing={2}>
                <Grid item xs={8}>
                    <item><Text/></item>
                </Grid>
            </Container>
        </div>
    )
}

export default About