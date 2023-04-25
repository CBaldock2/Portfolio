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
                    <p className='aboutMe'>Hello, I'm Christopher Baldock. I'm currently a part time student in a coding boot camp with SMU, where I'm expanding my knowledge in data analytics. I've always had a knack for numbers, which is what drew me to the world of databases. I find it fascinating to create organized tables that can be used to derive insights and inform decision-making. While I hope to land a job in data analytics, my ultimate goal is to continue learning and growing in this field. I also enjoy creating things, be it tangible or intangible. My current occuption is a carpenter. My hobbies include hiking, gaming, and listening to music.</p>
                </Grid>
            </Container>
        </div>
    )
}

export default About