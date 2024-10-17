// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/CaseStudy.css'

// Assets

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import trash from '../assets/s2t.png'
import xoticsLogo from '../assets/s2t-cover.jpg'

import tools from '../assets/trash-tools.svg'



function CaseStudyTwo() {

  return (

    <motion.section
      initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
      animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
      transition={{ duration: 2, delay: 1.5 }}>
      <section className="section">
       
        <div>
        <div className='case-title'>
        <img className='case-logo' src={xoticsLogo} alt="image of stand up to trash logo"/>
        <h1 className='desktop-title'> STAND UP TO TRASH</h1>
        </div>
        <img className='case-img' src={trash} alt="image of stand up to trash website prototype"/>
        </div>
        <div className='case-text'>
        <div className='mobile-title'>
        <img className='case-logo' src={xoticsLogo} alt="image of stand up to trash logo"/>
        <h1> STAND UP TO TRASH</h1>
        </div>
       
          <b><a target='_blank' class="hot-links" href="https://www.figma.com/design/7DJkxfrm9LYiX336gzjKdI/Final-Designs-%26-Prototype?node-id=0-1&t=Ue6GtNETsdTKWVyT-1"><p>🔗 Figma Prototype</p> </a></b>
          <p className='case-description'>
          Led the design process, from requirements, WIREFRAMES, prototyping, and usability testing, transitionING from manual data collection on paper to an efficient database-driven web application.
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

export default CaseStudyTwo;
