// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Home.css'
import '../styling/Trash.css'


// Components
import NavBar from '../components/NavBar';
import s2t from '../assets/s2t-img.svg';
import s2tImg1 from '../assets/s2t-img-1.png';
import s2tImg2 from '../assets/userPersona.svg';
import s2tImg3 from '../assets/informationalArchitecture.svg';
import s2tImg4 from '../assets/s2t-img-3.svg';
import s2tImg5 from '../assets/s2t-img-5.svg';
import s2tImg6 from '../assets/brandGuide.svg';
import testing from '../assets/s2t-img-6.jpg';
import s2tImg8 from '../assets/s2t-img-8.svg';

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

  const [theme, setTheme] = useState('light');
  
    const toggleTheme = () => {
      setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };
  
    useEffect(() => {
      document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
    }, [theme]);

  return (
    <div id="home">
      <Cursor/>
      <div className='sticky-navbar'>
        <NavBar theme={theme} toggleTheme={toggleTheme}/>
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
            <p>Figma Prototype</p>
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
            <img className='project-img' src={s2tImg2} alt="Persona for Stand Up To Trash User Admin" />
            <p className='project-position'>We crafted a persona to depict the characteristics of our target audience, 
            based on real data collected during Requirements Elicitation. This gave us a clear idea of who we were designing for to avoid bias.</p>
          </div>

          <br/>
          <div>
          <p className='project-heading'>Informational Architecture</p>
            <br/>
            <img className='project-img' src={s2tImg3} alt="Informational Architecture for Stand Up To Trash User Admin" />
            <p className='project-position'>We organized an Informational Architecture to depict the user journeys our volunteers and admins would take. These different user journeys 
              encompassed all the actions that both Volunteers and Admin needed to account for during a cleanup event. 
            </p>

          </div>
          <div>
          <p className='project-heading'>Feature Tracker</p>
            <br/>
            <img className='project-img' src={s2tImg5} alt="Informational Architecture for Stand Up To Trash User Admin" />
            <p className='project-position'>Due to the large amount of features we planned to include to the design, we organized them all into one
              page where we sectioned each Feature into Volunteer and Admin side. This helped us stay organized with which features we finished and which still needed
              to get done. 
            </p>

          </div>
          <br/>
          <p id="case-study-title" className='project-heading'>Ideation & Wireframing</p>
          <div>
          <p className='project-heading'>Low-fidelity Wireframe</p>
            <br/>
            <img className='project-img' src={s2tImg4} alt="Informational Architecture for Stand Up To Trash User Admin" />
            <p className='project-position'>After some sketches, we designed low-fidelity wireframe of how admins would check-in and input data for volunteers. 
            An important feature here was being able to search up volunteer names using a search bar, to decrease scroll time and improve accuracy.
            We tested this wireframe to see what worked and what didn't work.</p>
          </div>
          <div>
            <br/>
          <p className='project-heading'>Brand Guide</p>
            <br/>
            <img className='project-img' src={s2tImg6} alt="Informational Architecture for Stand Up To Trash User Admin" />
            <p className='project-position'>Once our list of features and component library were finalized, we created a Branding Guide to help us make a consistent and visually appealing 
              design for our client's Dashboard System. 
            </p>
          </div>
          <div>
            <br/>
          <p className='project-heading'>Hi-fidelity Wireframes</p>
            <br/>
            <img className='project-img' src={mobiles2t} alt="Informational Architecture for Stand Up To Trash User Admin" />
            <p className='project-position'>After testing our wireframes with our client, we were given more features to include such as 'Party Size', 
              'Add Guest', and an 'Event Card'. These features were meant to help the admin organize their events more efficiently, and keep track of Volunteers who did not register 
              beforehand and those who registered more than one person.
            </p>
            <br/>
            <img className='project-img' src={s2tImg8} alt="Informational Architecture for Stand Up To Trash User Admin" />
            <p className='project-position'>We designed this pop-up modal for inputting trash weight. The Admin would click on a Volunteer's profile then input their trash data along with images of their trash for 
              verification. This design allowed Admin to update the data as much as they needed. 
            </p>
          </div>

          <div>
          <p id="case-study-title" className='project-heading'>Prototyping & User Testing</p>
            <br/>
          <p className='project-heading'>Usability Testing</p>
            <br/>
            <img className='project-img' src={testing} alt="Informational Architecture for Stand Up To Trash User Admin" />
            <p className='project-position'>We conducted Usability Testing using Figma Prototypes with our Admins to make sure our designs were 
              usable and efficiently addressing their needs for a quick and easy way of checking in Volunteers and inputting trash weight. We conducted 
              different usability tests for the main features we needed to deliver. 
            </p>
          </div>

          <div>
          <p id="case-study-title" className='project-heading'>Final Design & Handoff</p>
            <br/>
          <p className='project-heading'>Figma Prototype</p>
            <br/>
            <img className='project-img' src={mobiles2t} alt="Informational Architecture for Stand Up To Trash User Admin" />
            <p className='project-position'>The final product was a Figma Prototype. This prototype has different walkthrough to show how the volunteer and admin can fully interact with it.
              With this new product, we aimed to reduce the organization's time on tracking and analyzing data from beach clean-up events by 30%.
              The Prototype was accepted and delivered for Development, as our Developers began to build the software.
            </p>
          </div>
          <a href="https://www.figma.com/proto/7DJkxfrm9LYiX336gzjKdI/Final-Designs-%26-Prototype?page-id=0%3A1&node-id=14-8450&p=f&viewport=-24%2C906%2C0.06&t=EousxkfTbxL2hbnm-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=14%3A8450&show-proto-sidebar=1">
          <p id="project-button" className='button'>View Figma Prototype</p>
          </a>

          <div>
            <br/>
          <p id="case-study-title" className='project-heading'>Why It Matters</p>
            <br/>
            <p className='project-position'>Working on a real-world project was very enriching. I learned a lot about leading a team. Being 
              a leader is not easy, but seeing what a team of designers can accomplish in a span of a year is very rewarding. Stand Up To Trash gave us the 
              opportunity to design a system for their beach cleanups and improve their quality of work life. Make sure to check out Stand Up To Trash's website and 
              see how you can be part of their beach cleanup events!
            
            </p>
            <a href="https://www.standuptotrash.com/">
          <p id="project-button" className='button'>Stand Up To Trash</p>
          </a>
          </div>
        </div>
      </div>

      <div className='mobile-project-section'>
        
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
  <p>Figma Prototype</p>
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
  <img className='project-img' src={s2tImg2} alt="Persona for Stand Up To Trash User Admin" />
  <p className='project-position'>We crafted a persona to depict the characteristics of our target audience, 
  based on real data collected during Requirements Elicitation. This gave us a clear idea of who we were designing for to avoid bias.</p>
</div>

<br/>
<div>
<p className='project-heading'>Informational Architecture</p>
  <br/>
  <img className='project-img' src={s2tImg3} alt="Informational Architecture for Stand Up To Trash User Admin" />
  <p className='project-position'>We organized an Informational Architecture to depict the user journeys our volunteers and admins would take. These different user journeys 
    encompassed all the actions that both Volunteers and Admin needed to account for during a cleanup event. 
  </p>

</div>
<div>
<p className='project-heading'>Feature Tracker</p>
  <br/>
  <img className='project-img' src={s2tImg5} alt="Informational Architecture for Stand Up To Trash User Admin" />
  <p className='project-position'>Due to the large amount of features we planned to include to the design, we organized them all into one
    page where we sectioned each Feature into Volunteer and Admin side. This helped us stay organized with which features we finished and which still needed
    to get done. 
  </p>

</div>
<br/>
<p id="case-study-title" className='project-heading'>Ideation & Wireframing</p>
<div>
<p className='project-heading'>Low-fidelity Wireframe</p>
  <br/>
  <img className='project-img' src={s2tImg4} alt="Informational Architecture for Stand Up To Trash User Admin" />
  <p className='project-position'>After some sketches, we designed low-fidelity wireframe of how admins would check-in and input data for volunteers. 
  An important feature here was being able to search up volunteer names using a search bar, to decrease scroll time and improve accuracy.
  We tested this wireframe to see what worked and what didn't work.</p>
</div>
<div>
  <br/>
<p className='project-heading'>Brand Guide</p>
  <br/>
  <img className='project-img' src={s2tImg6} alt="Informational Architecture for Stand Up To Trash User Admin" />
  <p className='project-position'>Once our list of features and component library were finalized, we created a Branding Guide to help us make a consistent and visually appealing 
    design for our client's Dashboard System. 
  </p>
</div>
<div>
  <br/>
<p className='project-heading'>Hi-fidelity Wireframes</p>
  <br/>
  <img className='project-img' src={mobiles2t} alt="Informational Architecture for Stand Up To Trash User Admin" />
  <p className='project-position'>After testing our wireframes with our client, we were given more features to include such as 'Party Size', 
    'Add Guest', and an 'Event Card'. These features were meant to help the admin organize their events more efficiently, and keep track of Volunteers who did not register 
    beforehand and those who registered more than one person.
  </p>
  <br/>
  <img className='project-img' src={s2tImg8} alt="Informational Architecture for Stand Up To Trash User Admin" />
  <p className='project-position'>We designed this pop-up modal for inputting trash weight. The Admin would click on a Volunteer's profile then input their trash data along with images of their trash for 
    verification. This design allowed Admin to update the data as much as they needed. 
  </p>
</div>

<div>
<p id="case-study-title" className='project-heading'>Prototyping & User Testing</p>
  <br/>
<p className='project-heading'>Usability Testing</p>
  <br/>
  <img className='project-img' src={testing} alt="Informational Architecture for Stand Up To Trash User Admin" />
  <p className='project-position'>We conducted Usability Testing using Figma Prototypes with our Admins to make sure our designs were 
    usable and efficiently addressing their needs for a quick and easy way of checking in Volunteers and inputting trash weight. We conducted 
    different usability tests for the main features we needed to deliver. 
  </p>
</div>

<div>
<p id="case-study-title" className='project-heading'>Final Design & Handoff</p>
  <br/>
<p className='project-heading'>Figma Prototype</p>
  <br/>
  <img className='project-img' src={mobiles2t} alt="Informational Architecture for Stand Up To Trash User Admin" />
  <p className='project-position'>The final product was a Figma Prototype. This prototype has different walkthrough to show how the volunteer and admin can fully interact with it.
    With this new product, we aimed to reduce the organization's time on tracking and analyzing data from beach clean-up events by 30%.
    The Prototype was accepted and delivered for Development, as our Developers began to build the software.
  </p>
</div>
<a href="https://www.figma.com/proto/7DJkxfrm9LYiX336gzjKdI/Final-Designs-%26-Prototype?page-id=0%3A1&node-id=14-8450&p=f&viewport=-24%2C906%2C0.06&t=EousxkfTbxL2hbnm-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=14%3A8450&show-proto-sidebar=1">
<p id="project-button" className='button'>View Figma Prototype</p>
</a>

<div>
  <br/>
<p id="case-study-title" className='project-heading'>Why It Matters</p>
  <br/>
  <p className='project-position'>Working on a real-world project was very enriching. I learned a lot about leading a team. Being 
    a leader is not easy, but seeing what a team of designers can accomplish in a span of a year is very rewarding. Stand Up To Trash gave us the 
    opportunity to design a system for their beach cleanups and improve their quality of work life. Make sure to check out Stand Up To Trash's website and 
    see how you can be part of their beach cleanup events!
  
  </p>
  <a href="https://www.standuptotrash.com/">
<p id="project-button" className='button'>Stand Up To Trash</p>
</a>
</div>

      </div>

      {/* <div className='spotify-container'>
        <SpotifyNow/>
      </div> */}
      <Footer theme={theme} toggleTheme={toggleTheme}/>
    </div>
  );
}

export default Trash;
