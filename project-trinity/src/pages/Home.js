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
import SpotifyNow from '../components/SpotifyNow';
import InfiniteScroll from '../components/InfiniteScroll';



import React from 'react';



function Home() {

  return (
    <div>

      <NavBar/>
      <Bio/>
      <Projects/>
      <HeroShot/>
      <InfiniteScroll/>
      <div className='spotify-container'>
        <SpotifyNow/>
      </div>
      <Footer/>

      
      
      
    </div>
  );
}

export default Home;
