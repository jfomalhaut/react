import React from 'react';
import './About.css';
import { Footer } from '../../component';
import imageURI from '../../globals/imageURI';

const About = () => {
    return (
        <div className="container">
            <div className="about">
                <div className="about_tit">
                    <span>ABOUT TNGT</span>
                </div>
                <img src={`${imageURI['about']}`} />
            </div>
         <Footer />
        </div>
    );
};

export default About;