// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Home.css'
import '../styling/heroShot.css'


// Components
import NavBar from '../components/NavBar';
import HeroShot from '../components/HeroShot';
import Projects from '../components/Projects';
import Bio from '../components/Bio';



// Assets
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import SpotifyNow from '../components/SpotifyNow';
import InfiniteScroll from '../components/InfiniteScroll';



import React from 'react';
import Cursor from '../components/Cursor';
import HorizontalScroll from '../components/HorizontalScroll';
import About from './About';
import SpinningSun from '../components/SpinningSun';
import SpinningStar from '../components/SpinningStar';



function Home() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
  }, [theme]);

  

  return (
    <div id="home" className={theme === 'light' ? 'dark-theme' : 'light-theme'}>

      {/* <Cursor/> */}

      

      <div className='sticky-navbar'>
        <NavBar theme={theme} toggleTheme={toggleTheme}/>
      </div>

      {theme === 'light' ? <SpinningStar /> : <SpinningSun />}

      {/* <Bio/> */}

      {/* <div id="projects">
      <HorizontalScroll/>
        <div id='about'>
        <br/>
        <About/>
        </div>
      </div> */}

      {/* <HeroShot/>
      <br/> */}

      {/* <InfiniteScroll/> */}

      {/* <div className='spotify-container'>
        <SpotifyNow/>
      </div> */}

      {/* <Footer/> */}

      
      
      
    </div>
  );
}

export default Home;
