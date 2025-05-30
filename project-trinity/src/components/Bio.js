// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Bio.css'

// Components
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import bioThumbnail from '../assets/hero-thumbnail.jpg';
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
      {/* <div className='bio-thumbnail'>
          <img id="desktop-bio-img" className='bio-img' src={bioThumbnail} alt="image of the author" />
          <div className='bio-name'>
            <p>
              <b>Rafael Carrillo</b>
              
            </p>
            <p className='bio-position'>
              UX Designer
            </p>
          </div>
        </div> */}
       <div className='spinner-container'>
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
       
        <br/>
        {/* <Typewriter/> */}
        
        <h2 className='bio-description'>
        Hello, my name is Rafael Carrillo!
        
        </h2>
        <br/>
        <h2 className='bio-description'>
        ‍I am a passionate UX Designer and Engineer who creates useful, intuitive, and engaging products.
        </h2>
        <h3 className='bio-description'>
        As a lover of all things creative, my curiosity for the human and technology led me to specialize in Human-Computer Interaction which taught me about the remarkable intersection of the human experience and computers.
        Learn more about me here!
        </h3>
        {/* <h2 className='bio-description'>
        I am a passionate designer, a life-long coder, and a lover of all things creative. 
        My curiosity for the human and technology led me to earn a Degree in Human-Computer Interaction 
        which taught me about the remarkable intersection of the human experience and computers.
        </h2> */}
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
