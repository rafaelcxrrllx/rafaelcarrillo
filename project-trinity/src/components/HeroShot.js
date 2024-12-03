// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/heroShot.css'

// Components
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import mobileheroShot from '../assets/mobile-hero-img.jpg'



const HeroShot = () => {
  // const [isVisible, setIsVisible] = useState(false);
  // const sectionRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true);  // Set visibility when section is in view
  //       }
  //     });
  //   }, { threshold: 0.25 }); // Trigger when 50% of the section is visible

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     if (sectionRef.current) {
  //       observer.unobserve(sectionRef.current);
  //     }
  //   };
  // }, []);

  return (
    <div id="home">
    <motion.section
      // ref={sectionRef}
      // initial={{ opacity: 0, y: 50 }}      // Start hidden with y offset (below)
      // animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 25 }} // Fade in and move up
      // transition={{ duration: 2, ease: "easeOut" }} // Smooth transition
      className='introduction-page'> 
      
      
    </motion.section>
    <div className='slogan'>
        <p>
        BORN & RAISED
        </p>
        <p>
        SOUTH CENTRAL LA
        </p>
        <p>
        SINCE
        </p>
        <p className='slogan-year'>
        ‘01
        </p>
      </div>   
    </div>
  );
};

export default HeroShot;
