// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/About.css'

// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {motion} from 'framer-motion'

// Assets
import headshot from '../assets/headshot.png'

function About() {

  return (
    <div> 
            

    <Nav/>
    
    {/* <motion.div
      initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
      animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
      transition={{ duration: 1 }}>
        <p className='title'>
          About
        </p> 
    </motion.div> */}
    
    <motion.div 
      initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
      animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
      transition={{ duration: 1 }}
      className='about-main-container'>
     

       
          <img className='headshot' src={headshot} alt="image of the author"/>

          <div id="about-flour" className='flourescent-about'></div>
          <div className='about-description-container'>
            <p> <span className='start-letter'>
                                  R
            </span>afael Carrillo is an aspiring entrepreneur in Design and Development with a passion for art and technology. Rafael is an alumni from the University of 
            California, Irvine with a Bachelor of Science, Specializing in Human Computer Interaction in 2024. 
            Combining his unique problem solving skills with human-centered design, Rafael reimagines how
            our world can be designed and delivered for the best human experience. 
            </p>
          </div>
          <div id="about-flour" className='flourescent-about'></div>
    </motion.div>  
    <Footer/>
    </div>
  );
}

export default About;
