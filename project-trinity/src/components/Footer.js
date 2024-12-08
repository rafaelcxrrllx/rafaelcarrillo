// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Footer.css'

// Assets
import logo from '../assets/footer-logo.png'
import copy from '../assets/icons/copy.svg'

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Footer() {

  const handleCopy = (event) => {
    const content = event.target.innerText; // Get the text inside the div
    navigator.clipboard.writeText(content) // Copy to clipboard
      .then(() => alert('Email copied to clipboard!'))
      .catch((err) => console.error('Failed to copy text: ', err));
  };

  const controls = useAnimation(); // Controls for animation
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible"); // Start animation when in view
    } else {
      controls.start("hidden"); // Keep it hidden when out of view
    }
  }, [controls, inView]);


  return (

    <motion.footer
    initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
    animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
    transition={{ duration: 2, delay: 1.5 }}>
      <section className="footer-section">
     
     
    <div className='footer-content'>
    <div>
      <img className='footer-img' src={logo} alt="image of logo" />
      </div>
      
      <div>
      <h1 id="contact" className='connect-title'>
          Let's Connect
        </h1>
          
          <div 
              class="clipboard"
            >
                <h4 className='green-font' 
                  onClick={handleCopy} 
                  style={{ cursor: 'pointer' }}
                  id="quote">
                rafaelcarrillo09@gmail.com <img className='copy' src={copy} alt="copy" />
              </h4>
            </div>
          
        <h3 className='quote' id="quote">
          <i>“Work is love made visible.” </i>- Khalil Gibran
        </h3>
        <p className='trademark'>
              © 2024 Rafael Carrillo | Powered by Dreams
        </p>
      </div>
      
    </div>
      
      <div className='footer-container'>
          <div>
              <p className='logo'>
              © 2024 Rafael Carrillo | Powered by Dreams
              </p>
          </div>
      </div>

      </section>
    </motion.footer>
  );
}

export default Footer;
