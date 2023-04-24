import React from "react";
import '../styles/style.css';
import { FaHtml5, FaReact, FaJs, FaCss3, FaBootstrap, FaCodeBranch } from 'react-icons/fa';
import { DiMongodb, DiMysql } from 'react-icons/di';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Resume() {
    return (
        <div className='resumeBG'>
            <p className='download'>Download my <a href='https://drive.google.com/file/d/1zJOdza-EzkAdA5PfTOHzKEJc4XNiACps/view?usp=share_link'>resume.</a></p>
            <div>
                <p className='skill'>Here is a list of my skills:</p>
                <div className='carousel-wrapper'>
                    <Carousel showArrows={false} showIndicators={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000} transitionTime={1500} stopOnHover={true}>
                        <div>
                            <p>HTML5</p>
                            <FaHtml5 size={200} color="#e34c26" />
                        </div>
                        <div>
                            <p>React</p>
                            <FaReact size={200} color="#61dbfb" />
                        </div>
                        <div>
                            <p>JavaScript</p>
                            <FaJs size={200} color="#f0db4f" />
                        </div>
                        <div>
                            <p>CSS3</p>
                            <FaCss3 size={200} color="#264de4" />
                        </div>
                        <div>
                            <p>Bootstrap</p>
                            <FaBootstrap size={200} color="#563d7c" />
                        </div>
                        <div>
                            <p>MySQL</p>
                            <DiMysql size={200} color="#00758f" />
                        </div>
                        <div>
                            <p>MongoDB</p>
                            <DiMongodb size={200} color="#4db33d" />
                        </div>
                        <div>
                            <p>REST APIs</p>
                            <FaCodeBranch size={200} color="#9c00a9" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Resume