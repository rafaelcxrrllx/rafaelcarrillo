// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Bio.css'

// Components
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import bioThumbnail from '../assets/hero-thumbnail.png';
import uciImg from '../assets/uci-img.jpg';
import download from '../assets/icons/download.svg';
import Typewriter from './TypeWriter';
import spinner from '../assets/icons/spinner.svg';
import spinnerDark from '../assets/icons/spinner-dark.svg';


const Bio = ({ theme, toggleTheme }) => {
  

  return (
    <div>
     
      {/* <div className='bio-divider'>
        <h1>
          Bio
        </h1>
      </div>  */}
      <div className='bio-content'>
       {/* <div className='spinner-container'>
        <span>
          <img className='spinner-image' src={theme === 'light' ? spinnerDark : spinner} alt="spinner" />
        </span>
       <h1 className='welcome-text'>
          WELCOME
        </h1>
        <span>
          <img className='spinner-image' src={theme === 'light' ?  spinnerDark : spinner} alt="spinner" />
        </span>
       </div>
       <br/> */}
        {/* <Typewriter/> */}
        <br/>
        <br/>
        <br/>
        <div className='bio-thumbnail'>
          <img id="desktop-bio-img" className='bio-img' src={bioThumbnail} alt="image of the author" />
          <div className='bio-name'>
            <h3>
              <b>Rafael Carrillo</b>
              
            </h3>
            <p className='bio-position'>
              UX Designer
            </p>
          </div>
        </div>

        {/* <h2 className='bio-description'>
        Hello, my name is Rafael Carrillo!
        
        </h2> */}
        {/* <h2 className='bio-description'>
        ‍Hello! My name is Rafael. 
        </h2> */}
        {/* <p className='bio-description'>
          Learn more about me here!
        </p> */}
        <br/>
       
        <h2 className='bio-description'>
        I have 3+ years of experience in the social tech and web domain space. I have led projects focused on user-centric services, and responsive websites, and I am currently seeking opportunities to design technological solutions.

        </h2>
        {/* <p className='location'>
          Los Angeles, California
        </p> */}
        {/* <div className='resume-button'>
            <a id='resume-button' download="RafaelCarrillo.pdf" href={require("../assets/Resume/Resume.pdf")}> <p className='button'>Resume <img id="downloadicon" src={download} alt="download icon" /></p>  </a>
          </div> */}
       
        </div>


        {/* <div className='education-content'>
        <img id="mobile-bio-img" className='bio-img' src={uciImg} alt="image of UCI emblem" />
            <div className='education-info'>
            <img id="desktop-edu-img" className='bio-img' src={uciImg} alt="image of UCI emblem" />
              
                <div className='education-text'>
                  <h2>
                    <b>University of California, Irvine - 2024</b>
                  </h2>
                  <p>
                  Bachelor of Science in Informatics
                  </p>
                  <p>
                  Minor in Informations and Computer Science
                  </p>
                  <p>
                  Specialization in Human-Computer Interaction
                  </p>
                </div>
            </div>
        </div> */}
       
     
    </div>
  );
};

export default Bio;
