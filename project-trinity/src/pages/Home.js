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



function Home() {
  // "homepage": "https://rafaelcxrrllx.github.io/trinityla",
  const lottiePlayerRef = useRef(null);


  useEffect(() => {
    // Set a delay of 2 seconds (2000ms) before playing the animation
    const timer = setTimeout(() => {
      if (lottiePlayerRef.current) {
        lottiePlayerRef.current.play(); // Start the animation
      }
    }, 3000); // 2000ms = 2 seconds

    // Cleanup the timer when component unmounts
    return () => clearTimeout(timer);
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
          ref={lottiePlayerRef}>
        </dotlottie-player>
      </div>

      <div id="vine-two" >
        <dotlottie-player 
          
          src="https://lottie.host/c9f78807-0c1f-411c-b164-5a82b3bae9ed/ZXcOSYPY8t.json"
          background="transparent" 
          speed=".5" 
          style={{width: 400, height: 400, transform: 'scaleX(-1) scaleY(-1)', }} 
          autoPlay
          ref={lottiePlayerRef}>
        </dotlottie-player>
      </div>

        <h1 className='main-title'>USER <br/>EXPERIENCE DESIGNER©</h1>
        <p className='header'>CURRENTLY AVAILABLE FOR CRAFTING EXPERIENCES</p>
      </section>  

      <section className='introduction-page'>
      <div id="vine-three" >
        <dotlottie-player 
          
          src="https://lottie.host/c9f78807-0c1f-411c-b164-5a82b3bae9ed/ZXcOSYPY8t.json"
          background="transparent" 
          speed=".5" 
          style={{width: 400, height: 400}} 
          autoPlay
          ref={lottiePlayerRef}>
        </dotlottie-player>
      </div>

      <div id="vine-four" >
        <dotlottie-player 
          
          src="https://lottie.host/c9f78807-0c1f-411c-b164-5a82b3bae9ed/ZXcOSYPY8t.json"
          background="transparent" 
          speed=".5" 
          style={{width: 400, height: 400, transform: 'scaleX(-1) scaleY(-1)', }} 
          autoPlay
          ref={lottiePlayerRef}>
        </dotlottie-player>
      </div>
        <div className='introduction-text'>
        <h1>
          Hi! I’m Rafael. 
        </h1>
        <h2 className='gray-text'>
          I love <span className='green-font'>🎨 design</span>, <span className='green-font'>💻 technology</span>, <br/> and <span className='green-font'>solving problems </span>utilizing a <br/> human-centered process. 🌎
        </h2>
        <h3>
        EDUCATION
        </h3>
        <h2 className='school'>
          University of California, Irvine - 2024
        </h2>
        <h3 id="indent" className='gray-text'>
          Bachelor of Science in Informatics <br/>
          Minor in Informations and Computer Science <br/>
          Specialization in Human-Computer Interaction <br/>
        </h3>
        <h3>
        FIND ME
        </h3>
        <div id="indent" className='icons-container'>
          <img src={instagram} alt="instagram" />
          <img src={linkedIn} alt="LinkedIn" />
          <img src={github} alt="GitHub" />
        </div>
        </div>
        <Carousel/>
      </section>
      <div className='offer-container'>
        <div className='offer1'>
          <h1>
            I love creating cool solutions
            and solving complex problems
            for people - like you.
          </h1>
        </div>
     
      </div>

      <div className='offer-container'>
        <div className='offer1'>
          <h1>
          I deliver impactful results, 
          through strategic thinking and 
          data-driven insights.
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
