// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Home.css'
import '../styling/Trash.css'

// Components
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import { useState, useEffect } from 'react';
import React from 'react';

// Assets
import hero from '../assets/pain-hero.jpg';
import prototypes from '../assets/pain-prototypes.jpg';
import smartGoal from '../assets/pain-smart-goal.jpg';
import competitiveAnalysis from '../assets/pain-competitive-analysis.jpg';
import persona from '../assets/pain-persona.jpg';
import empathyMap from '../assets/pain-empathy-map.jpg';
import journeyMap from '../assets/pain-journey-map.jpg';
import affinityMap from '../assets/pain-affinity-map.jpg';
import infoArch from '../assets/pain-info-architecture.jpg';
import midFi from '../assets/pain-midfi-wireframes.jpg';
import styleGuide from '../assets/pain-style-guide.jpg';
import ideate from '../assets/pain-ideate.jpg';

function Pain() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
  }, [theme]);

  return (
    <div id="home">
      <Cursor />
      <div className='sticky-navbar'>
        <NavBar theme={theme} toggleTheme={toggleTheme} />
      </div>
      <br/>
      <div className='project-case-study'>

        <div className='project-section'>
          <h1 className='project-title'>
            Pain Psychologist Website Revamp:
            <span className='soft-title'> A Compassionate and Optimized Experience for Mental Health Clients </span>
          </h1>

            <img className='project-img' src={hero} alt="Homepage for painpsychologistla.com" />

          <p id="project-hook" className='project-description'>
            Revamped a private pain psychologist’s website, transforming it into a more empathetic and intuitive user experience.
            The redesign improved SEO visibility, increased client inquiries by 42%, and boosted organic traffic by 55%.
          </p>

             <div>
            <p className='project-heading'>Problem</p>
            <p className='project-position'>
              The client’s original website felt outdated and cluttered, making it difficult for users to find information or trust the brand.
              Navigation was inconsistent, and the booking form was buried — leading to low consultation rates.
            </p>
          </div>

          <div>
            <p className='project-heading'>Goal</p>
            <p className='project-position'>
              To design a clean, empathetic, and conversion-driven experience that reflects compassion, builds trust, and
              encourages potential clients to book a consultation.
            </p>
          </div>

                    <div className='project-specs'>
          <div>
            <p className='project-heading'>Role</p>
            <p className='project-position'>UX/UI Designer & Developer</p>
          </div>
          <div>
          <p className='project-heading'>Duration</p>
          <p className='project-position'>2 months</p>
          </div>
          <div>
          <p className='project-heading'>Team</p>
          <p className='project-position'>Rafael Carrillo (me), Dr. Jennifer Huggins</p>
          </div>
          
          </div>
          
         
          <div>
          <p className='project-heading'>Deliverables</p>
          <div className='project-categories'>
           <p>UX Research</p>
            <p>Wireframes</p>
            <p>SEO Optimization</p>
            <p>Responsive Web Design</p>
          </div>
          </div>
          <div>
          <p className='project-heading'>Impact</p>
          <div id="project-impact" className='project-categories'>
            <p>+55% increase in organic traffic</p>
            <p>+42% more consultation form submissions</p>
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
            <p className='project-heading'>SMART Goal</p>
            <img className='project-img' src={smartGoal} alt="SMART Goal for Pain Psychologist" />
            <p className='project-position'>
              Redesign the website to simplify navigation and highlight services.
              Increase client consultation form submissions by 40% within two months of launch.
            </p>
          </div>

          <div>
            <p id="case-study-title" className='project-heading'>Research</p>
            <p className='project-heading'>Competitive Analysis</p>
            <img className='project-img' src={competitiveAnalysis} alt="Competitive Analysis" />
            <p className='project-position'>
              Reviewed top pain therapy websites to identify trends in empathy-driven design, simplicity, and accessibility.
              Extracted design patterns that foster user trust and ease of navigation.
            </p>
          </div>

          <div>
            <p className='project-heading'>Persona</p>
            <img className='project-img' src={persona} alt="Persona" />
            <p className='project-position'>
              “Sarah,” a 40-year-old with chronic pain, seeks emotional safety and easy booking.
              Her goals guided the tone and flow of the new design.
            </p>
          </div>

          <div id="smaller-img-div">
            <p className='project-heading'>Empathy Map</p>
            <img id="smaller-img" className='project-img' src={empathyMap} alt="Empathy Map" />
            <p className='project-position'>
              Mapped user thoughts, feelings, and actions to ensure the website tone stayed human and supportive.
            </p>
          </div>

          <div>
            <p className='project-heading'>Journey Map</p>
            <img className='project-img' src={journeyMap} alt="Journey Map" />
            <p className='project-position'>
              Identified pain points in navigation and contact form accessibility — simplified the booking process with multiple CTAs.
            </p>
          </div>

          <div id="smaller-img-div">
            <p className='project-heading'>Affinity Map</p>
            <img id="smaller-img" className='project-img' src={affinityMap} alt="Affinity Map" />
            <p className='project-position'>
              Grouped recurring feedback around trust, accessibility, and emotional tone.
            </p>
          </div>

          <div>
            <p id="case-study-title" className='project-heading'>Information Architecture</p>
            <img className='project-img' src={infoArch} alt="Information Architecture" />
            <p className='project-position'>
              Simplified the structure into six clear pages:
              Home, About, Services, Testimonials, Blog, and Contact — each optimized for conversion and readability.
            </p>
          </div>

          <div id="smaller-img-div">
            <p id="case-study-title" className='project-heading'>Ideation & Wireframes</p>
            <img className='project-img' src={ideate} alt="Ideation" />
            <img id="smaller-img" className='project-img' src={midFi} alt="Mid-Fi Wireframes" />
            <p className='project-position'>
              Prototyped low- and mid-fidelity wireframes emphasizing emotional storytelling and strong CTAs.
              Each design iteration tested user flow clarity and visual calmness.
            </p>
          </div>

          <div id="smaller-img-div">
            <p id="case-study-title" className='project-heading'>Visual Design</p>
            <img id="smaller-img" className='project-img' src={styleGuide} alt="Style Guide" />
            <p className='project-position'>
              The style guide introduced soft blues, neutral backgrounds, and human-centered imagery to convey trust and care.
              Typography (Outfit) ensured readability and consistency across screens.
            </p>
          </div>

          <div id="smaller-img-div">
            <p id="case-study-title" className='project-heading'>Final Wireframes</p>
            <img id="smaller-img" className='project-img' src={prototypes} alt="Figma High-Fidelity Prototype" />
          </div>

          <a  target="_blank" href="https://www.painpsychologistla.com/">
            <p id="project-button" className='button'>Visit Website</p>
          </a>

          <div>
            <p id="case-study-title" className='project-heading'>Results</p>
            <p className='project-position'>
              +55% increase in organic traffic<br/>
              +42% more consultation form submissions<br/>
              30% longer average session time<br/>
              Positive client feedback: “Patients say it’s easier to find and contact me now.”
            </p>
          </div>

          <div>
            <p id="case-study-title" className='project-heading'>Reflection</p>
            <p className='project-position'>
              This project showed the importance of empathy in UX. Designing for users in pain meant leading with compassion and clarity.
              The new website not only increased client reach but built a digital space for healing. A special thank you to Dr. Huggins for
              giving me this opportunity!
            </p>
          </div>

        </div>
      </div>


      <div className='mobile-project-section'>
                  <h1 className='project-title'>
            Pain Psychologist Website Revamp:
            <span className='soft-title'> A Compassionate and Optimized Experience for Mental Health Clients </span>
          </h1>

            <img className='project-img' src={hero} alt="Homepage for painpsychologistla.com" />

          <p id="project-hook" className='project-description'>
            Revamped a private pain psychologist’s website, transforming it into a more empathetic and intuitive user experience.
            The redesign improved SEO visibility, increased client inquiries by 42%, and boosted organic traffic by 55%.
          </p>

             <div>
            <p className='project-heading'>Problem</p>
            <p className='project-position'>
              The client’s original website felt outdated and cluttered, making it difficult for users to find information or trust the brand.
              Navigation was inconsistent, and the booking form was buried — leading to low consultation rates.
            </p>
          </div>

          <div>
            <p className='project-heading'>Goal</p>
            <p className='project-position'>
              To design a clean, empathetic, and conversion-driven experience that reflects compassion, builds trust, and
              encourages potential clients to book a consultation.
            </p>
          </div>

                    <div className='project-specs'>
          <div>
            <p className='project-heading'>Role</p>
            <p className='project-position'>UX/UI Designer & Developer</p>
          </div>
          <div>
          <p className='project-heading'>Duration</p>
          <p className='project-position'>2 months</p>
          </div>
          <div>
          <p className='project-heading'>Team</p>
          <p className='project-position'>Rafael Carrillo (me), Dr. Jennifer Huggins</p>
          </div>
          
          </div>
          
         
          <div>
          <p className='project-heading'>Deliverables</p>
          <div className='project-categories'>
           <p>UX Research</p>
            <p>Wireframes</p>
            <p>SEO Optimization</p>
            <p>Responsive Web Design</p>
          </div>
          </div>
          <div>
          <p className='project-heading'>Impact</p>
          <div id="project-impact" className='project-categories'>
            <p>+55% increase in organic traffic</p>
            <p>+42% more consultation form submissions</p>
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
            <p className='project-heading'>SMART Goal</p>
            <img className='project-img' src={smartGoal} alt="SMART Goal for Pain Psychologist" />
            <p className='project-position'>
              Redesign the website to simplify navigation and highlight services.
              Increase client consultation form submissions by 40% within two months of launch.
            </p>
          </div>

          <div>
            <p id="case-study-title" className='project-heading'>Research</p>
            <p className='project-heading'>Competitive Analysis</p>
            <img className='project-img' src={competitiveAnalysis} alt="Competitive Analysis" />
            <p className='project-position'>
              Reviewed top pain therapy websites to identify trends in empathy-driven design, simplicity, and accessibility.
              Extracted design patterns that foster user trust and ease of navigation.
            </p>
          </div>

          <div>
            <p className='project-heading'>Persona</p>
            <img className='project-img' src={persona} alt="Persona" />
            <p className='project-position'>
              “Sarah,” a 38-year-old with chronic pain, seeks emotional safety and easy booking.
              Her goals guided the tone and flow of the new design.
            </p>
          </div>

          <div>
            <p className='project-heading'>Empathy Map</p>
            <img className='project-img' src={empathyMap} alt="Empathy Map" />
            <p className='project-position'>
              Mapped user thoughts, feelings, and actions to ensure the website tone stayed human and supportive.
            </p>
          </div>

          <div>
            <p className='project-heading'>Journey Map</p>
            <img className='project-img' src={journeyMap} alt="Journey Map" />
            <p className='project-position'>
              Identified pain points in navigation and contact form accessibility — simplified the booking process with multiple CTAs.
            </p>
          </div>

          <div>
            <p className='project-heading'>Affinity Map</p>
            <img className='project-img' src={affinityMap} alt="Affinity Map" />
            <p className='project-position'>
              Grouped recurring feedback around trust, accessibility, and emotional tone.
            </p>
          </div>

          <div>
            <p id="case-study-title" className='project-heading'>Information Architecture</p>
            <img className='project-img' src={infoArch} alt="Information Architecture" />
            <p className='project-position'>
              Simplified the structure into six clear pages:
              Home, About, Services, Testimonials, Blog, and Contact — each optimized for conversion and readability.
            </p>
          </div>

          <div>
            <p id="case-study-title" className='project-heading'>Ideation & Wireframes</p>
            <img className='project-img' src={ideate} alt="Ideation" />
            <img className='project-img' src={midFi} alt="Mid-Fi Wireframes" />
            <p className='project-position'>
              Prototyped low- and mid-fidelity wireframes emphasizing emotional storytelling and strong CTAs.
              Each design iteration tested user flow clarity and visual calmness.
            </p>
          </div>

          <div>
            <p id="case-study-title" className='project-heading'>Visual Design</p>
            <img className='project-img' src={styleGuide} alt="Style Guide" />
            <p className='project-position'>
              The style guide introduced soft blues, neutral backgrounds, and human-centered imagery to convey trust and care.
              Typography (Outfit) ensured readability and consistency across screens.
            </p>
          </div>

          <div>
            <p id="case-study-title" className='project-heading'>Final Wireframes</p>
            <img className='project-img' src={prototypes} alt="Figma High-Fidelity Prototype" />
          </div>

          <a  target="_blank" href="https://www.painpsychologistla.com/">
            <p id="project-button" className='button'>Visit Website</p>
          </a>

          <div>
            <p id="case-study-title" className='project-heading'>Results</p>
            <p className='project-position'>
              +55% increase in organic traffic<br/>
              +42% more consultation form submissions<br/>
              30% longer average session time<br/>
              Positive client feedback: “Patients say it’s easier to find and contact me now.”
            </p>
          </div>

          <div>
            <p id="case-study-title" className='project-heading'>Reflection</p>
            <p className='project-position'>
              This project showed the importance of empathy in UX. Designing for users in pain meant leading with compassion and clarity.
              The new website not only increased client reach but built a digital space for healing. A special thank you to Dr. Huggins for
              giving me this opportunity!
            </p>
          </div>



      </div>

      <Footer theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default Pain;