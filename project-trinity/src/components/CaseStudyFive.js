// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/CaseStudy.css'

// Assets

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import portfolio from '../assets/portfolio.png'
import portfolioLogo from '../assets/portfolio-cover.svg'

import tools from '../assets/portfolio-tools.svg'



function CaseStudyFive() {

  return (

    <motion.section
      initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
      animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
      transition={{ duration: 2, delay: 1.5 }}>
      <section className="section">
       
        <div>
        <div className='case-title'>
        <img className='case-logo' src={portfolioLogo} alt="image of e-coach logo"/>
        <h1 className='desktop-title'> PORTFOLIO V1.0</h1>
        </div>
        <img className='case-img' src={portfolio} alt="image of e-coach website prototype"/>
        </div>
        <div className='case-text'>
        <div className='mobile-title'>
        <img className='case-logo' src={portfolioLogo} alt="image of xotics logo"/>
        <h1>PORTFOLIO V1.0</h1>
        </div>
       
          <b><a target='_blank' class="hot-links" href="https://rafaelcxrrllx.github.io/trinity/"><p>🔗 PORTFOLIO V1.0</p> </a></b>
          <p className='case-description'>
            Visit my first portfolio ever designed and developed where I present case studies on my past projects! See how my skills in design and development have improved exponentially!
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

export default CaseStudyFive;
