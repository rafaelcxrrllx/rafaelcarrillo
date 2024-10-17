// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/CaseStudy.css'

// Assets

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import svusd from '../assets/svusd.png'
import svusdLogo from '../assets/svusd-cover.jpg'

import tools from '../assets/svusd-tools.svg'



function CaseStudyThree() {

  return (

    <motion.section
      initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
      animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
      transition={{ duration: 2, delay: 1.5 }}>
      <section className="section">
       
        <div>
        <div className='case-title'>
        <img className='case-logo' src={svusdLogo} alt="image of stand up to trash logo"/>
        <h1 className='desktop-title'> A.L.L SVUSD</h1>
        </div>
        <img className='case-img' src={svusd} alt="image of stand up to trash website prototype"/>
        </div>
        <div className='case-text'>
        <div className='mobile-title'>
        <img className='case-logo' src={svusdLogo} alt="image of stand up to trash logo"/>
        <h1> A.L.L SVUSD</h1>
        </div>
       
          <b><a target='_blank' class="hot-links" href="https://www.allsvusd.org/"><p>🔗 allsvusd.org</p> </a></b>
          <p className='case-description'>
          REVAMPED AND DEVELOPED Saddle Back Valley UNIFIED School District’s website, migrating from Squarespace to DjangoCMS, enhancing the overall user interface and experience, creating REUSABLE COMPONENTS to streamline content management.
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

export default CaseStudyThree;
