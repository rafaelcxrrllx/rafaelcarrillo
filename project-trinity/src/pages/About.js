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
    <div id="about">
      <Cursor/>
      <div className='sticky-navbar'>
        <NavBar/>
      </div>
     
      <div className='bio-content'>
        <div className='bio-thumbnail'>
          <img id="desktop-bio-img" className='bio-img' src={bioThumbnail} alt="image of the author" />
          <div className='bio-name'>
            <p>
              <b>Rafael Carrillo </b>
              
            </p>
            <p className='position'>
              UX Designer
            </p>
          </div>
        </div>
       
        <h1 className='intro-text'>
          Hi again, my name is Rafael
        </h1>
        <AboutTypewriter/>
        <h2 className='bio-description'>
          I am a passionate designer, a life-long coder, and a lover of all things creative. 
          My curiosity for the human and technology led me to specialize in Human-Computer Interaction 
          which taught me about the remarkable intersection of the human experience and computers.
        </h2>
        <h2 className='bio-description'>
          I was born and raised in South Central Los Angeles. From an early age, I had passion in immersing myself in the world of creativity, 
          whether it came from books, movies, museums, or conversations with others. Learning other's creativity allowed me to understand 
          many forms of it and empathize with different perspectives. This love for creativity eventually led me to become a designer 
          myself, where I am able to hone in on my soft skills needed as a UX designer. With a background in Informatics and a 
          minor in Informations and Computer from UC Irvine, along with my Specialization in Human-Computer Interaction, I bring a unique perspective 
          to design and technology.
        </h2>
    
        <p className='location'>
          Los Angeles, California
        </p>
        <br/>
        <br/>
        <br/>
        
        </div>

        <HeroShot/>


      
      <div className='spotify-container'>
        <SpotifyNow/>
      </div>
      <Footer/>

      
    </div>
  );
}

export default About;
