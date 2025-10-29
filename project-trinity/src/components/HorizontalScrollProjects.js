import React from "react";
import '../styling/HorizontalScroll.css'
import s2t from '../assets/mobile-s2t-img.svg';
import { Link } from 'react-router-dom';
import barrio from '../assets/barrioHero.png';
import carino from '../assets/carinoHero.png';
import value from '../assets/va.png';
import xotic from '../assets/xoticHero.png';
import trinity from '../assets/trinity-desktop.png';

import art from '../assets/mobile-art-img.jpg';
import recipez from '../assets/mobile-recipez-img.jpg';

const HorizontalScrollProjects = () => {
  return (
    <div id="projects">
        <div className='project-divider'>
        <h1>
          Websites for Entrepreneurs
        </h1>
        {/* <h2 className='bio-description'>
          I’ve also freelanced as a web designer, building custom websites for entrepreneurs where I translated their ideas into modern, user-friendly designs that supported their business goals.
        </h2> */}
      </div> 
    <div className="scroll-container">
      <div className="scroll-content">

          <div className="item">
          <a href="https://www.barrioathletics.com"  target="_blank">
            <div className='project-section'>
              <img id="trash-img" className='trash-img' src={barrio} alt="website design for Barrio Athletics" />
              <h1 className="name">
                Barrio Athletics
                    </h1>
                    <p className="position">
                      UX/UI Designer
                    </p>
            </div>
            </a>
        </div>

        <Link 
                  to="https://carinohardwear.com/" target="_blank">
        <div className="item">
                  <div className='project-section'>
                    <img  id="trash-img" className='trash-img' src={carino} alt="Cariño Hardwear Logo" />
                    <h1 className="name">
                      Cariño Hardwear
                    </h1>
                    <p className="position">
                      UX/UI Designer
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
        <div className="item">
          <a href="https://shopvalueapparel.com/" target="_blank">
            <div className='project-section'>
              <img  id="trash-img" className='trash-img' src={value} alt="website design for Value Apparel" />
              <h1 className="name">
                Value Apparel
                    </h1>
                    <p className="position">
                      UX/UI Designer
                    </p>
            </div>
            </a>
        </div>

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
        <a href="https://rafaelcxrrllx.github.io/xotics/" target="_blank">
          <div className='project-section'>
                  <img  id="trash-img" className='trash-img' src={xotic} alt="website design for Xotic Dip" />
                  <h1 className="name">
                  Xotic Dip
                  </h1>
                    <p className="position">
                      UX/UI Designer
                    </p>
                </div>
                </a>
        </div>

        <div id="art-item" className="item">
        <a href="https://trinitylosangeles.net" target="_blank">
          <div className='project-section'>
                  <img  id="trash-img" className='trash-img' src={trinity} alt="website design for Trinity LA" />
                  <h1 className="name">
                  Trinity Los Angeles
                  </h1>
                    <p className="position">
                      Brand Owner
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

export default HorizontalScrollProjects;