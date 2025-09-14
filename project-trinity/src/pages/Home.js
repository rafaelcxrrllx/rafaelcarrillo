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
import HorizontalScrollProjects from '../components/HorizontalScrollProjects';




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

      <Cursor/>

      

      <div className='sticky-navbar'>
        <NavBar theme={theme} toggleTheme={toggleTheme}/>
      </div>
        <br/>
        <br/>
      <div className='intro-container'>

     
      <Bio theme={theme} toggleTheme={toggleTheme}/>
    
      </div>
            <InfiniteScroll/>

      
      <div className='spacing'>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
      <div id="projects">
      <HorizontalScroll/>
      <HorizontalScrollProjects/>
    <div className='spacing'>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
        <div id='about'>
        <br/>
        <About/>
        <br/>
        <br/>
        <br/>
        </div>
      </div>

      <HeroShot/>
      <div className='spacing'>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>

      <div className='spotify-container'>
        <SpotifyNow />
      </div>

      <Footer theme={theme} toggleTheme={toggleTheme}/>

      
      
      
    </div>
  );
}

export default Home;
