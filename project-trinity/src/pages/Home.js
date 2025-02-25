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



function Home() {


  return (
    <div id="home">
      <Cursor/>
      <div className='sticky-navbar'>
        <NavBar/>
      </div>
      <Bio/>
      <div id="projects">
      <HorizontalScroll/>
      {/* <Projects/> */}
      <div id='about'>
        <br/>
      <About/>
      </div>
      </div>
      <HeroShot/>
      <br/>
      <InfiniteScroll/>
      <div className='spotify-container'>
        <SpotifyNow/>
      </div>
      <Footer/>

      
      
      
    </div>
  );
}

export default Home;
