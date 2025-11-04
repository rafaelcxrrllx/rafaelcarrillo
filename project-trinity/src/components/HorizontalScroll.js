import React from "react";
import '../styling/HorizontalScroll.css'
import s2t from '../assets/mobile-s2t-img.svg';
import { Link } from 'react-router-dom';
import barrio from '../assets/barrioHero.png';
import carino from '../assets/carinoHero.png';
import xotic from '../assets/xoticHero.png';
import pain from '../assets/painHero.jpg';
import art from '../assets/mobile-art-img.jpg';
import recipez from '../assets/mobile-recipez-img.jpg';

const HorizontalScroll = () => {
  return (
    <div id="projects">
        <div className='project-divider'>
        <h1>
          UX Projects
        </h1>
        {/* <h2 className='bio-description'>
          Over the past years, I've led long-term instructional and UX projects where I guided a team from research and ideation through delivery, ensuring the final content was both engaging and learner-centered.
        </h2> */}
      </div> 
    <div className="scroll-container">
      <div className="scroll-content">

          <Link 
                  to="/painpsychologistla">
          <div className="item">
            <div className='project-section'>
              <img id="trash-img" className='trash-img' src={pain} alt="website design for painpsychologistla" />
              <h1 className="name">
                painpsychologistla: A Help Portal for Chronic Pain
                    </h1>
                    <p className="position">
                      UX/UI Designer & Developer
                    </p>
            </div>
        </div>
        </Link>

        <Link 
                  to="/standuptotrash">
        <div className="item">
                  <div className='project-section'>
                    <img  id="trash-img" className='trash-img' src={s2t} alt="admin dashboard for stand up to trash" />
                    <h1 className="name">
                      Stand Up To Trash: A Volunteer Management System for Beach Cleanup
                    </h1>
                    <p className="position">
                      Design Lead
                    </p>
                    
                    {/* <p className='project-position'>Design Lead Intern</p>
                    <h1 className='project-title'> Stand Up to Trash:<span className='soft-title'> A Volunteer Management System for Beach Cleanup </span> </h1> */}
                    {/* <div className='project-categories'>
                      <p>SAAS</p>
                      <p>Admin Dashboard</p>
                      <p>Volunteer Dashboard</p>
                      <p>Design System</p>
                    </div>
                    <p className='project-description'>
                      Led 4 product designers in designing a platform connecting 4,000 volunteers to admins for beach cleanup events, 
                      facilitated the transition from manual data collection on paper to efficient database-driven data collection, admin’s time on task by 70%.
                    </p>
                     */}
                    {/* <Link 
                      to="/standuptotrash">
                        <p id="project-button" className='button'>View Case Study</p>
                    </Link>
             */}
                  </div>
        </div>
        </Link>

        {/* <div className="item">
          <a href="https://www.carinohardwear.com">
            <div className='project-section'>
              <img className='project-img' src={carino} alt="website design for Cariño Hardwear" />
              <h1 className="name">
                Cariño Hardwear
                    </h1>
                    <p className="position">
                      UX/UI Designer
                    </p>
            </div>
            </a>
        </div>

          <div className="item">
          <a href="https://rafaelcxrrllx.github.io/xotics/">
            <div className='project-section'>
              <img className='project-img' src={xotic} alt="website design for Xotic Dip" />
              <h1 className="name">
                Xotic Dip
                    </h1>
                    <p className="position">
                      UX/UI Designer
                    </p>
            </div>
            </a>
        </div> */}
        

        <div id="art-item" className="item">
        <a href="https://rafaelcxrrllx.github.io/trinity/research-assistant.html">
          <div className='project-section'>
                  <img id="art" className='project-img' src={art} alt="image from co-design case study" />
                  <h1 className="name">
                  STAR Lab: Assistive Technology Designs for Noise Sensitivity
                  </h1>
                    <p className="position">
                      UX Research Assistant
                    </p>
                </div>
                </a>
        </div>
        <div className="item">
        <a href="https://rafaelcxrrllx.github.io/trinity/design-uci.html">
          <div className='project-section'>
                  <img id="art" className='project-img' src={recipez} alt="image from co-design case study" />
                  <h1 className="name">
                  RecipEZ: Foster Community of Cooks of All Skill Levels
                  </h1>
                    <p className="position">
                      Mobile Designer
                    </p>
                </div>
                </a>
        </div>
        {/* <div className="item">Item 5</div> */}
      </div>
    </div>
    </div>
  );
};

export default HorizontalScroll;