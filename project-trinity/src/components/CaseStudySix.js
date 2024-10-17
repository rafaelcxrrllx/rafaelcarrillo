// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/CaseStudy.css'

// Assets

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import trinity from '../assets/trinity.png'
import trinityLogo from '../assets/trinity-cover.svg'

import tools from '../assets/case-tools.svg'



function CaseStudySix() {

  return (

    <motion.section
      initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
      animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
      transition={{ duration: 2, delay: 1.5 }}>
      <section className="section">
       
        <div>
        <div className='case-title'>
        <img className='case-logo' src={trinityLogo} alt="image of Trinity LA logo"/>
        <h1 className='desktop-title'> TRINITY LA</h1>
        </div>
        <img className='case-img' src={trinity} alt="image of Trinity LA website prototype"/>
        </div>
        <div className='case-text'>
        <div className='mobile-title'>
        <img className='case-logo' src={trinityLogo} alt="image of Trinity LA logo"/>
        <h1>TRINITY LA</h1>
        </div>
       
          <b><a target='_blank' class="hot-links" href="https://trinitylosangeles.net/"><p>🔗 TRINITYLOSANGELES.NET</p> </a></b>
          <p className='case-description'>
          Designer, Developer, and Founder of TRINITY LA, A personal brand BUILT WITH React.js, featuring a unique design, responsive layout and optimized UI/UX elements to enhance user experience and increase user engagement.
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

export default CaseStudySix;
