// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/CaseStudy.css'

// Assets

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ecoach from '../assets/eCoach.png'
import xoticsLogo from '../assets/coach-cover.svg'

import tools from '../assets/coach-tools.svg'



function CaseStudyFour() {

  return (

    <motion.section
      initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
      animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
      transition={{ duration: 2, delay: 1.5 }}>
      <section className="section">
       
        <div>
        <div className='case-title'>
        <img className='case-logo' src={xoticsLogo} alt="image of e-coach logo"/>
        <h1 className='desktop-title'> E-COACH</h1>
        </div>
        <img className='case-img' src={ecoach} alt="image of e-coach website prototype"/>
        </div>
        <div className='case-text'>
        <div className='mobile-title'>
        <img className='case-logo' src={xoticsLogo} alt="image of xotics logo"/>
        <h1>E-Coach</h1>
        </div>
       
          <b><a target='_blank' class="hot-links" href="https://github.com/DaniBoie/AI_E-Coach.git"><p>🔗 E-COACH REPOSITORY</p> </a></b>
          <p className='case-description'>
            designED AND DEVELOPED AN intuitive user interface, UTILIZING ARTIFICIAL INTELLIGENCE to enhance users' presentation skill and foster confidence, engagement, and persuasion through personalized feedback.
          </p>
          <div className='case-tools'>
          <p> <b>BUILT WITH:</b> </p>
          <img className='case-img-tools' src={tools} alt="a list of software tools used to design and develop."/>
          </div>
        </div>
     
     
       
      </section>
    </motion.section>
  );
}

export default CaseStudyFour;
