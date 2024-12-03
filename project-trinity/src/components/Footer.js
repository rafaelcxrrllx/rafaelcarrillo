// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Footer.css'

// Assets
import logo from '../assets/footer-logo.png'
import copy from '../assets/icons/copy.svg'

import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import VinesFooter from '../components/VinesFooter';



function Footer() {

  const handleCopy = (event) => {
    const content = event.target.innerText; // Get the text inside the div
    navigator.clipboard.writeText(content) // Copy to clipboard
      .then(() => alert('Email copied to clipboard!'))
      .catch((err) => console.error('Failed to copy text: ', err));
  };

  const lottiePlayerRefFooter = useRef(null);
  const vinePlayerRefFooter = useRef(null);


  useEffect(() => {
    const lottieElementFooter = lottiePlayerRefFooter.current;
    const vineElementFooter = vinePlayerRefFooter.current;

    const handlePlayAnimation = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lottieElementFooter.play();
          vineElementFooter.play();
        } else {
          lottieElementFooter.stop();
          vineElementFooter.stop();
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayAnimation, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    if (lottieElementFooter) {
      observer.observe(lottieElementFooter);
    }
    if (vineElementFooter) {
      observer.observe(vineElementFooter);
    }

    return () => {
      if (lottieElementFooter) {
        observer.unobserve(lottieElementFooter);
      }
      if (vineElementFooter) {
        observer.unobserve(vineElementFooter);
      }
    };
  }, []);

  return (

    <motion.footer
    initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
    animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
    transition={{ duration: 2, delay: 1.5 }}>
      <section className="footer-section">
     
     
    <div className='footer-content'>
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
          
        <h3 id="quote">
          <i>“Work is love made visible.” </i>- Khalil Gibran
        </h3>
      </div>
      <div>
      <img className='footer-img' src={logo} alt="image of logo" />
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
