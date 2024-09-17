// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Home.css'

// Components
import Carousel from '../carousels/Carousel';
import Nav from '../components/Nav';

// Assets
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import SpotifyNow from '../components/SpotifyNow';
import ScrollingText from '../components/scrollingText';
import ScrollToTop from '../components/ScrollToTop';
import LoadingScreen from '../components/LoadingScreen';
import instagram from '../assets/icons/instagram.svg'
import linkedIn from '../assets/icons/linkedIn.svg'
import github from '../assets/icons/github.svg'

import React, { useEffect, useRef } from 'react';
import Vines from '../components/Vines';



function Home() {
  // "homepage": "https://rafaelcxrrllx.github.io/trinityla",
  const lottiePlayerRef = useRef(null);
  const vinePlayerRef = useRef(null);


  useEffect(() => {
    const lottieElement = lottiePlayerRef.current;
    const vineElement = vinePlayerRef.current;

    const handlePlayAnimation = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lottieElement.play();
          vineElement.play();
        } else {
          lottieElement.stop();
          vineElement.stop();
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayAnimation, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    if (lottieElement) {
      observer.observe(lottieElement);
    }
    if (vineElement) {
      observer.observe(vineElement);
    }

    return () => {
      if (lottieElement) {
        observer.unobserve(lottieElement);
      }
      if (vineElement) {
        observer.unobserve(vineElement);
      }
    };
  }, []);

  return (
    <div>
      <LoadingScreen/>
      <Nav/>
      <motion.div 
        initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
        animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
        transition={{ duration: 2, delay: 1.5 }}
        className='home-container'
        id="home">    
      <section className='landing-page'>
      <div id="vine-one" >
        <dotlottie-player 
          
          src="https://lottie.host/c9f78807-0c1f-411c-b164-5a82b3bae9ed/ZXcOSYPY8t.json"
          background="transparent" 
          speed=".5" 
          style={{width: 400, height: 400}} 
          autoPlay
          ref={vinePlayerRef}
          >
        </dotlottie-player>
      </div>

      <Vines/>

        <h1 className='main-title'>USER <br/>EXPERIENCE DESIGNER©</h1>
        <p className='header'>CURRENTLY AVAILABLE FOR CRAFTING EXPERIENCES</p>
      </section>  

      <section className='introduction-page'>
    
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
      </section>
      <br/>
      <div className='offer-container'>
        <div id="offer-one" className='offer1'>
          <h1>
          I specialize in designing human experiences <br/>
          and solving complex problems <br/>
          for people - like you.
          </h1>
        </div>
     
      </div>
      <div className='plant'>
      <dotlottie-player
        src="https://lottie.host/f2a5a80b-467e-4cca-b79f-00923d794bf1/oMiEMYm3Lx.json"
        background="transparent"
        speed="0.5"
        id="plant-svg"
        style={{ width: 250, height: 250 }}
        ref={lottiePlayerRef}
      ></dotlottie-player>
      </div>

      <div className='offer-container'>
        <div id="offer-two" className='offer1'>
          <h1>
          I deliver results, <br/>
          through design thinking, <br/>
          data-driven insights and shared empathy.
          </h1>
        </div>
     
      </div>
      <ScrollingText/>


  
      <div className='spotify-container'>
        <SpotifyNow/>
      </div>

      
      
      
      </motion.div>
      <Footer/>
    </div>
  );
}

export default Home;
