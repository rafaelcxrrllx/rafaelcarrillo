// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Home.css'
import '../styling/Projects.css'


// Components
import NavBar from '../components/NavBar';
import s2t from '../assets/s2t-img.svg';
import s2tImg1 from '../assets/s2t-img-1.png';
import s2tImg2 from '../assets/userPersona.svg';
import s2tImg3 from '../assets/informationalArchitecture.svg';

import mobiles2t from '../assets/mobile-s2t-img.svg';


// Assets
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import SpotifyNow from '../components/SpotifyNow';
import InfiniteScroll from '../components/InfiniteScroll';



import React from 'react';
import Cursor from '../components/Cursor';



function Trash() {


  return (
    <div id="home">
      <Cursor/>
      <div className='sticky-navbar'>
        <NavBar/>
      </div>
      <br/>
      <div className='project-case-study'>

      
        <div className='project-section'>
        <h1 className='project-title'> Stand Up to Trash:<span className='soft-title'> A Volunteer Management System for Beach Cleanup </span> </h1>

          <img className='project-img' src={mobiles2t} alt="admin dashboard for stand up to trash" />
          
          <p id="project-hook" className='project-description'>
            Led 4 product designers in designing a platform connecting 4,000 volunteers to admins for beach cleanup events, 
            facilitated the transition from manual data collection on paper to efficient database-driven data collection, admin’s time on task by 70%.
          </p>
          <div>
            <p className='project-heading'>Problem:</p>
            <p className='project-position'>How might we design a centralized way to streamline the process of volunteer registration and trash data collection?</p>
          </div>
          <div>
            <p className='project-heading'>Opportunity:</p>
            <p className='project-position'>This project aimed to make data collection efficient and create an external volunteer system to keep past volunteers recorded.</p>
          </div>
          <div className='project-specs'>

         
          <div>
            <p className='project-heading'>Role</p>
            <p className='project-position'>Design Lead Intern</p>
          </div>
          <div>
          <p className='project-heading'>Duration</p>
          <p className='project-position'>1 year</p>
          </div>
          <div>
          <p className='project-heading'>Team</p>
          <p className='project-position'>Rafael Carrillo (me), &nbsp;  Jasmine Wu, &nbsp;  Gayathri Yedavilli, &nbsp;  Winston Lee,  &nbsp; Jessica Soleto</p>
          </div>
          
          </div>
          <div>
          <p className='project-heading'>Deliverables</p>
          <div className='project-categories'>
            <p>User Research</p>
            <p>Admin Dashboard</p>
            <p>Volunteer Dashboard</p>
            <p>Design System</p>
          </div>
          </div>
          <div>
          <p className='project-heading'>Impact</p>
          <div id="project-impact" className='project-categories'>
            <p>Reduced admin’s time on task by 70%</p>
            <p>Connected 4,000 volunteers to admins for beach cleanup events</p>
          </div>
          </div>
          
          <div>
          <p className='project-heading'>Process</p>
            <div className='project-categories'>
              <p>Discovery and Research &#8594;</p>
              <p>Ideation & Wireframing &#8594;</p>
              <p>Prototyping & User Testing &#8594;</p>
              <p>Final Design & Handoff 	&#x2713;</p>
            </div>
          </div>
          <div>
          <p id="case-study-title" className='project-heading'>Discovery and Research</p>
            <p className='project-position'>First, we conducted a requirements elicitation by interviewing Stand Up To Trash's coordinators,
              making sure we noted the wants, needs, and painpoints of the users and stakeholders, resulting in a very detailed Requirements Document.</p>
            <br/>
            <img className='project-img' src={s2tImg1} alt="admin dashboard for stand up to trash" />
          </div>
          <div>
          <p className='project-heading'>Current Trash Collection Process</p>
          <p className='project-position'>
          1. &nbsp; Volunteers have their trash weighed and told to remember their weight
          </p>
          <p className='project-position'>
          2. &nbsp; Volunteers record their name and weight
          </p>
          <p className='project-position'>
          3. &nbsp; Volunteers drop off trash
          </p>
          </div>
          <div>
          <p className='project-heading'>Key Problems:</p>
          <p className='project-position'>1. &nbsp;Current process of manual collection of trash weight was time and energy consuming</p>
          <p className='project-position'>2. &nbsp;Translation from paper to Excel sheet was prone to errors</p>
          <p className='project-position'>3. &nbsp;There was no way to keep track of data trends</p>
          </div>
          <br/>
          <div>
          <p className='project-heading'>Persona</p>
            <p className='project-position'>Next, we crafted a persona to depict the characteristics of our target audience, 
              based on real data collected during Requirements Elicitation.</p>
            <br/>
            <img className='project-img' src={s2tImg2} alt="Persona for Stand Up To Trash User Admin" />
          </div>
          <br/>
          <div>
          <p className='project-heading'>Informational Architecture</p>
            <p className='project-position'>Next, we crafted an Informational Architecture to depict the user journeys our users (Volunteers and Admins) would take.</p>
            <br/>
            <img className='project-img' src={s2tImg3} alt="Informational Architecture for Stand Up To Trash User Admin" />
          </div>
        
        </div>
      </div>

      <div className='mobile-project-section'>
        <img className='project-img' src={mobiles2t} alt="admin dashboard for stand up to trash" />
        <p className='project-position'>Design Lead Intern</p>
        <h1 className='project-title'> Stand Up to Trash: <span className='soft-title'> A Volunteer Management System for Beach Cleanup </span></h1>
        <p className='button'>Case Study Soon</p>
      </div>

      <div className='spotify-container'>
        <SpotifyNow/>
      </div>
      <Footer/>

      
      
      
    </div>
  );
}

export default Trash;
