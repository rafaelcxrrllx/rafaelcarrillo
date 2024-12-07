// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Projects.css'

// Components
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import s2t from '../assets/s2t-img.svg';
import mobiles2t from '../assets/mobile-s2t-img.svg';
import barrio from '../assets/barrio-img.svg';
import mobilebarrio from '../assets/mobile-barrio-img.jpg';
import RecipEZ from '../assets/recipez-img.svg';
import recipezmobile from '../assets/mobile-recipez-img.jpg';
import art from '../assets/art-img.svg';
import mobileart from '../assets/mobile-art-img.jpg';
import { Link } from 'react-router-dom';

const Projects = () => {
  

  return (
    <div id="projects" >
     
      <div className='project-divider'>
        <h1>
          Projects
        </h1>
      </div> 
      
      <div className='project-section'>
        <img className='project-img' src={s2t} alt="admin dashboard for stand up to trash" />
        <p className='project-position'>Design Lead Intern</p>
        <h1 className='project-title'> Stand Up to Trash:<span className='soft-title'> A Volunteer Management System for Beach Cleanup </span> </h1>
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
        
        {/* <Link 
          to="/trash"> */}
            <p className='button'>Case Study Soon</p>
        {/* </Link> */}
      </div>

      <div className='mobile-project-section'>
        <img className='project-img' src={mobiles2t} alt="admin dashboard for stand up to trash" />
        <p className='project-position'>Design Lead Intern</p>
        <h1 className='project-title'> Stand Up to Trash: <span className='soft-title'> A Volunteer Management System for Beach Cleanup </span></h1>
        <p className='button'>Case Study Soon</p>
      </div>

      <div className='project-section'>
        <img className='project-img' src={barrio} alt="website design for Barrio Athletics" />
        <p className='project-position'>Web Designer / Full-stack Developer</p>
        <h1 className='project-title'> Freelance Web Design: <span className='soft-title'>Empowering Entrepreneurs in South Central LA </span> </h1>
        <div className='project-categories'>
          <p>Web Design</p>
          <p>Web Development</p>
          <p>Branding</p>
          <p>E-commerce</p>
        </div>
        <p className='project-description'>
        Designing and developing responsive websites for small business owners, ensuring optimal user 
        experience and cross-platform functionality. Leading all aspects from initial concept to final deployment, 
        increasing product sales by 200%.
        </p>
        <p className='button'>Case Study Soon</p>
      </div>

      <div className='mobile-project-section'>
        <img className='project-img' src={mobilebarrio} alt="website design for Barrio Athletics" />
        <p className='project-position'>Web Designer / Full-stack Developer </p>
        <h1 className='project-title'> Freelance Web Design: <span className='soft-title'>Empowering Entrepreneurs in South Central LA </span>  </h1>
        <p className='button'>Case Study Soon</p>
      </div>

      <div className='project-section'>
        <img className='project-img' src={art} alt="image from co-design case study" />
        <p className='project-position'>UX Research Assistant</p>
        <h1 className='project-title'> Social & Technological Action Research Lab: <span className='soft-title'>  Assistive Technology Designs for Noise Sensitivity </span></h1>
        <div className='project-categories'>
          <p>UX Research</p>
          <p>Co-Design</p>
          <p>Think-aloud Protocols</p>
          <p>Affinity Diagramming</p>
        </div>
        <p className='project-description'>
        Facilitated UX research to help create assistive technology designs, conducting 
        6 co-design sessions with over 20 participants to explore potential design solutions for noise-sensitivity experiences.
        </p>
        <p className='button'>Case Study Soon</p>
      </div>

      <div className='mobile-project-section'>
        <img className='project-img' src={mobileart} alt="image from co-design case study" />
        <p className='project-position'>UX Research Assistant </p>
        <h1 className='project-title'> Social & Technological Action Research Lab: <span className='soft-title'>  Assistive Technology Designs for Noise Sensitivity </span></h1>
        <p className='button'>Case Study Soon</p>
      </div>

      <div className='project-section'>
        <img className='project-img' src={RecipEZ} alt="prototypes for the mobile app RecipEZ" />
        <p className='project-position'>Mobile Designer</p>
        <h1 className='project-title'> Design at UCI: <span className='soft-title'>RecipEZ, a Mobile App that Fosters Community of Cooks of All Skill Levels </span></h1>
        <div className='project-categories'>
          <p>UX Research</p>
          <p>Surveys & Competitive Analysis</p>
          <p>Sketches, Wireframes & User flows</p>
          <p>Prototypes</p>
        </div>
        <p className='project-description'>
        Designed a recipe app to find recipes and share your own for in-app rewards. 
        The goal was to design an application that gamifies a typical recipe app and discover new recipes with difficulty 
        levels to provide recipe suggestions and encourage new ones.
        </p>
        <p className='button'>Case Study Soon</p>
      </div>

      <div className='mobile-project-section'>
        <img className='project-img' src={recipezmobile} alt="prototypes for the mobile app RecipEZ" />
        <p className='project-position'>Mobile Designer </p>
        <h1 className='project-title'> Design at UCI: <span className='soft-title'>RecipEZ, a Mobile App that Fosters Community of Cooks of All Skill Levels </span></h1>
        <p className='button'>Case Study Soon</p>
      </div>

    </div>
  );
};

export default Projects;
