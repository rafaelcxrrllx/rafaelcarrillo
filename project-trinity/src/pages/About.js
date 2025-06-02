// Global Styling
import '../styling/styles.css'
import '../styling/About.css'

// Local Styling
import '../styling/Home.css'
import '../styling/heroShot.css'


// Components
import NavBar from '../components/NavBar';
import HeroShot from '../components/HeroShot';
import bioThumbnail from '../assets/hero-thumbnail.jpg';
import AboutTypewriter from '../components/AboutTypeWriter';

// Assets
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import SpotifyNow from '../components/SpotifyNow';


import React from 'react';
import Cursor from '../components/Cursor';



function About() {


  return (
    <div >
      <div className='project-divider'>
        <h1>
          About
        </h1>
      </div> 
     
      <div className='bio-content'>
       
       
        <h1 className='intro-text'>
          Hi, my name is Rafael!
        </h1>
        <br/>
        {/* <AboutTypewriter/> */}
       
        <p className='bio-description'>
          I was born and raised in South Central Los Angeles. From an early age, I had passion in immersing myself in the world of creativity, 
          whether it came from books, movies, museums, or conversations with others. Learning other's creativity allowed me to understand 
          many forms of it and empathize with different perspectives. This love for creativity eventually led me to become a designer 
          myself, where I am able to hone in on my soft skills needed as a UX designer. 
        </p>
        <br/>
          <p className='bio-description'>
        As a lover of all things creative, my curiosity for the human and technology led me to specialize in Human-Computer Interaction which taught me about the remarkable intersection of the human experience and computers.
        </p>
        <br/>
        <p className='location'>
          Los Angeles, California
        </p>
        </div>
      
    </div>
  );
}

export default About;
