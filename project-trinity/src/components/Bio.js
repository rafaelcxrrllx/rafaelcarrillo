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


const Bio = () => {
  

  return (
    <div>
     
      {/* <div className='bio-divider'>
        <h1>
          Bio
        </h1>
      </div>  */}
      <div className='bio-content'>
        <div className='bio-thumbnail'>
          <img id="desktop-bio-img" className='bio-img' src={bioThumbnail} alt="image of the author" />
          <div className='bio-name'>
            <p>
              <b>Rafael Carrillo </b>
              
            </p>
            <p className='position'>
              UX Designer
            </p>
          </div>
        </div>
       
        <h1 className='intro-text'>
          Hi, Im Rafael.
        </h1>
        <h2 className='bio-description'>
          A UX Designer with 3+ years of experience in the <b>social tech</b> and <b>web domain space</b>. 
          I have led projects focused on <b>user-centric services</b>, and <b>responsive websites</b>, and 
          I am currently seeking opportunities to design <b>technological solutions</b>.
        </h2>
        {/* <h2 className='bio-description'>
        I am a passionate designer, a life-long coder, and a lover of all things creative. 
        My curiosity for the human and technology led me to earn a Degree in Human-Computer Interaction 
        which taught me about the remarkable intersection of the human experience and computers.
        </h2> */}
        <p className='location'>
          Los Angeles, California
        </p>
        <div>
            <a id='landing-page-link' download="RafaelCarrillo.pdf" href={require("../assets/Resume/Resume.pdf")}> <p className='button'>Resume <img id="downloadicon" src={download} alt="download icon" /></p>  </a>
          </div>
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
