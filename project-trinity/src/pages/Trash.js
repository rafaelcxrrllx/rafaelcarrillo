// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Home.css'
import '../styling/Projects.css'


// Components
import NavBar from '../components/NavBar';
import s2t from '../assets/s2t-img.svg';
import mobiles2t from '../assets/mobile-s2t-img.svg';


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



function Trash() {

  return (
    <div>

      <NavBar/>

      <div className='project-divider'>
        <h1 className='project-title'> Stand Up to Trash:<span className='soft-title'> A Volunteer Management System for Beach Cleanup </span> </h1>
      </div> 

      <div className='project-section'>
        <img className='project-img' src={s2t} alt="admin dashboard for stand up to trash" />
        <p className='project-position'>Design Lead Intern</p>
        <div className='project-categories'>
          <p>SAAS</p>
          <p>Admin Dashboard</p>
          <p>Volunteer Dashboard</p>
          <p>Design System</p>
        </div>
        <p className='project-description'>
          Led 4 product designers in designing a platform connecting 4,000 volunteers to admins for beach cleanup events, 
          facilitated the transition from manual data collection on paper to efficient database-driven data collection, admin’s time on task by 70%.
        </p>
        
      </div>

      <div className='mobile-project-section'>
        <img className='project-img' src={mobiles2t} alt="admin dashboard for stand up to trash" />
        <p className='project-position'>Design Lead Intern</p>
        <h1 className='project-title'> Stand Up to Trash: <span className='soft-title'> A Volunteer Management System for Beach Cleanup </span></h1>
        <p className='button'>Case Study Soon</p>
      </div>
      <Footer/>

      
      
      
    </div>
  );
}

export default Trash;
