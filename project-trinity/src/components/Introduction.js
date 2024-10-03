// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Home.css'

// Components
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import instagram from '../assets/icons/instagram.svg'
import linkedIn from '../assets/icons/linkedIn.svg'
import github from '../assets/icons/github.svg'
import Carousel from '../carousels/Carousel';


const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);  // Set visibility when section is in view
        }
      });
    }, { threshold: 0.25 }); // Trigger when 50% of the section is visible

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}      // Start hidden with y offset (below)
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }} // Fade in and move up
      transition={{ duration: 2, ease: "easeOut" }} // Smooth transition
      className='introduction-page'
    >
   
    
        <div className='introduction-text'>
        <h1>
          Hi! I’m Rafael. 
        </h1>
        <h2 className='gray-text'>
          I love <span className='green-font'>🎨 design</span>, <span className='green-font'>💻 technology</span>, <br/> and <span className='green-font'>solving problems </span>utilizing a <br/> human-centered process. 🌎
        </h2>
        <h4>
        EDUCATION
        </h4>
        <h3 className='school'>
          University of California, Irvine - 2024
        </h3>
        <h4 id="indent" className='gray-text'>
          Bachelor of Science in Informatics <br/>
          Minor in Informations and Computer Science <br/>
          Specialization in Human-Computer Interaction <br/>
        </h4>
        <h4>
        FIND ME
        </h4>
        <div id="indent" className='icons-container'>
          <a class="hot-links" href="https://www.instagram.com/rafaelcxrrllx/"><img src={instagram} alt="instagram" /> </a> 
          <a class="hot-links" href="https://www.linkedin.com/in/rafaelcxrrllx/"><img src={linkedIn} alt="LinkedIn" /> </a>
          <a class="hot-links" href="https://github.com/rafaelcxrrllx"><img src={github} alt="GitHub" /> </a>
        </div>
        </div>
        <Carousel/>
      </motion.section>
  );
};

export default Introduction;
