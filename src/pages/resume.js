import React from "react";
import '../styles/style.css';
import { FaHtml5, FaReact, FaJs, FaCss3, FaBootstrap, FaCodeBranch } from 'react-icons/fa';
import { DiMongodb, DiMysql } from 'react-icons/di';


function Resume() {
    return (
        <div className='resumeBG'>
            <h3>Resume</h3>
            <p>Download my resume.</p>
            <div>
                <p>Here is a list of my skills:</p>
                Front-End
                <ul>
                    <li><FaHtml5 size={32} color="#e34c26"/></li>
                    <li><FaReact size={32} color="#61dbfb"/></li>
                    <li><FaJs size={32} color="#f0db4f"/></li>
                    <li><FaCss3 size={32} color="#264de4"/></li>
                    <li><FaBootstrap size={32} color="#563d7c"/></li>
                </ul>
            </div>
            <div>
                Back-End
                <ul>
                    <li><DiMysql size={32} color="#00758f"/></li>
                    <li><DiMongodb size={32} color="#4db33d"/></li>
                    <li><FaCodeBranch size={32} color="#9c00a9"/></li>
                </ul>
            </div>
        </div>
    )
}

export default Resume