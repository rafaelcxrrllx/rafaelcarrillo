// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/CaseStudy.css'

// Assets

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import xotics from '../assets/xotics.png'
import xoticsLogo from '../assets/xotic-logo.jpg'

import tools from '../assets/case-tools.svg'



function CaseStudy() {

  return (

    <motion.section
      initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
      animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
      transition={{ duration: 2, delay: 1.5 }}>
      <section className="section">
       
        <div>
        <div className='case-title'>
        <img className='case-logo' src={xoticsLogo} alt="image of xotics logo"/>
        <h1 className='desktop-title'> XOTIC DIP</h1>
        </div>
        <img className='case-img' src={xotics} alt="image of xotics website prototype"/>
        </div>
        <div className='case-text'>
        <div className='mobile-title'>
        <img className='case-logo' src={xoticsLogo} alt="image of xotics logo"/>
        <h1> XOTIC DIP</h1>
        </div>
       
          <a class="hot-links" href="https://rafaelcxrrllx.github.io/xotics/"><p>🔗 xoticdip.com</p> </a> 
          <p className='case-description'>
          Designed and Developed Xotic Dip, an exotic car parts e-commerce with a featured product, checkout process, and unique design with responsive layout.
          </p>
          <div className='case-tools'>
          <p> BUILT WITH: </p>
          <img className='case-img-tools' src={tools} alt="a list of software tools used to design and develop."/>
          </div>
        </div>
     
     
       
      </section>
    </motion.section>
  );
}

export default CaseStudy;
