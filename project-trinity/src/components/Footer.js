// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Footer.css'

// Assets
import logo from '../assets/logo.svg';
import lightLogo from '../assets/light-logo.svg';
import copy from '../assets/icons/copy.svg';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import instagram from '../assets/icons/instagram.svg'
import linkedIn from '../assets/icons/linkedIn.svg'
import github from '../assets/icons/github.svg'
import coffee from '../assets/icons/coffee.svg'

import instagramLight from '../assets/icons/ig-light.svg'
import linkedInLight from '../assets/icons/linkedIn-light.svg'
import githubLight from '../assets/icons/git-light.svg'
import coffeeLight from '../assets/icons/coffee-light.svg'
import SpinningSun from '../components/SpinningSun';
import SpinningStar from '../components/SpinningStar';

function Footer({ theme, toggleTheme }) {

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
     <div className='spinning-sun'>     
      {theme === 'light' ? <SpinningStar /> : <SpinningSun />}
      </div>
      
      <div>
      <h1 id="contact" className='connect-title'>
          Let's Connect
        </h1>
        <div className='footer-links'>
        <a  href="https://www.linkedin.com/in/rafaelcxrrllx/"><img src={theme === 'light' ? linkedIn : linkedInLight} alt="LinkedIn" /> </a>
        <a  href="https://github.com/rafaelcxrrllx"><img src={theme === 'light' ? github : githubLight} alt="GitHub" /> </a>
        <a  href="https://www.instagram.com/rafaelcxrrllx/"><img src={theme === 'light' ? instagram : instagramLight} alt="instagram" /> </a> 
        <a  href="https://buymeacoffee.com/rafaelcxrrllx"><img id="coffee" src={theme === 'light' ? coffee : coffeeLight} alt="buy me a coffee" /> </a> 
        </div>
          
          {/* <div 
              class="clipboard"
            >
                <h4 className='green-font' 
                  onClick={handleCopy} 
                  style={{ cursor: 'pointer' }}
                  id="quote">
                rafaelcarrillo09@gmail.com <img className='copy' src={copy} alt="copy" />
              </h4>
            </div> */}
          
        <h3 className='quote' id="quote">
          <i>“Love rules the court, the camp, the grove,
And men below and saints above.”</i> - Sir Walter Scott
        </h3>
        {/* <p className='trademark'>
          Designed + Coded with ♥️ in Los Angeles
        </p> */}
      </div>
      
    </div>
      
      <div className='footer-container'>
          <div>
              <p className='logo'>
              Designed + Coded with &#x2661; in Los Angeles
              </p>
          </div>
      </div>

      </section>
    </motion.footer>
  );
}

export default Footer;
