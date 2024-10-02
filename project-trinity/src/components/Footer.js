// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Footer.css'

// Assets
import instagram from '../assets/icons/instagram.svg'
import linkedIn from '../assets/icons/linkedIn.svg'
import github from '../assets/icons/github.svg'
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import VinesFooter from '../components/VinesFooter';



function Footer() {

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
      {/* <div id="vine-one" >
        <dotlottie-player 
          
          src="https://lottie.host/c9f78807-0c1f-411c-b164-5a82b3bae9ed/ZXcOSYPY8t.json"
          background="transparent" 
          speed=".5" 
          style={{width: 400, height: 400}} 
          autoPlay
          ref={vinePlayerRefFooter}
          >
        </dotlottie-player>
      </div>

      <VinesFooter/> */}

     
       <h1 className='connect-title'>
          Let's Connect!
        </h1>
         <div className='footer-icons-container'>
         <a class="hot-links" href="https://www.instagram.com/rafaelcxrrllx/"><img src={instagram} alt="instagram" /> </a> 
          <a class="hot-links" href="https://www.linkedin.com/in/rafaelcxrrllx/"><img src={linkedIn} alt="LinkedIn" /> </a>
          <a class="hot-links" href="https://github.com/rafaelcxrrllx"><img src={github} alt="GitHub" /> </a>
        </div>
      <h3 className='green-font' id="quote">
        “Work is love made visible.” - Khalil Gibran
      </h3>
      <div className='footer-container'>
          <div>
              <p className='logo'>
              2024 © RAFAEL CARRILLO
              </p>
          </div>
      </div>
      </section>
    </motion.footer>
  );
}

export default Footer;
