import React from "react";
import '../styles/style.css';
import { FaHtml5, FaReact, FaJs, FaCss3, FaBootstrap, FaCodeBranch } from 'react-icons/fa';
import { DiMongodb, DiMysql } from 'react-icons/di';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Resume() {
    return (
        <div className='resumeBG'>
            <h3>Resume</h3>
            <p>Download my resume.</p>
            <div>
                <p>Here is a list of my skills:</p>
                <div className='carousel-wrapper'>
                    <Carousel showArrows={false} showIndicators={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000} transitionTime={1500} stopOnHover={true}>
                        <div><FaHtml5 size={200} color="#e34c26" /></div>
                        <div><FaReact size={200} color="#61dbfb" /></div>
                        <div><FaJs size={200} color="#f0db4f" /></div>
                        <div><FaCss3 size={200} color="#264de4" /></div>
                        <div><FaBootstrap size={200} color="#563d7c" /></div>
                        <div><DiMysql size={200} color="#00758f" /></div>
                        <div><DiMongodb size={200} color="#4db33d" /></div>
                        <div><FaCodeBranch size={200} color="#9c00a9" /></div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Resume