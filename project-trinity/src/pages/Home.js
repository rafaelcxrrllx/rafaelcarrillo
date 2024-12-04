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
import ScrollingText from '../components/scrollingText';
import InfiniteScroll from '../components/InfiniteScroll';

import LoadingScreen from '../components/LoadingScreen';
import CaseStudy from '../components/CaseStudy';
import CaseStudyTwo from '../components/CaseStudyTwo';
import CaseStudyThree from '../components/CaseStudyThree';
import CaseStudyFour from '../components/CaseStudyFour';
import CaseStudyFive from '../components/CaseStudyFive';
import CaseStudySix from '../components/CaseStudySix';



import React from 'react';
import Introduction from '../components/Introduction';



function Home() {

  return (
    <div>

      <NavBar/>
      <HeroShot/>
      <Bio/>
      <Projects/>
      <InfiniteScroll/>
      <div className='spotify-container'>
        <SpotifyNow/>
      </div>
      <Footer/>

      
      
      
    </div>
  );
}

export default Home;
