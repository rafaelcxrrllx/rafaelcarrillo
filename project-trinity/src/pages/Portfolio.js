// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Portfolio.css'

// Components
import Carousel from '../carousels/Carousel';
import Nav from '../components/Nav';

// Assets
import hero from '../assets/hero-shot.jpeg'
import stars from '../assets/stars.svg'
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

function Portfolio() {

  return (
    <div>
            

    <Nav/>
   
      <motion.div initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
      animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
      transition={{ duration: 1 }}
      className='home-container'>
      
      <div id="desktop-row" className='row'>
          <div className='col'>
          <Carousel/>
          </div>
          <div className='col'>
              <div className='col-container'>
              <p className='home-title'>Rafael Carrillo</p>
              
              <div id="mobile-flour" className='flourescent'></div>
              <p className='subtitle'>Hi</p>
              </div>
          </div>
      </div>
     
      
      <div id="desktop-flour" className='flourescent'></div>
      {/* <div>
        <p id="recent-work-title"><i>Recent Work</i></p>
      </div> */}


      
            


    </motion.div>
    <Footer/>
    </div>
  );
}

export default Portfolio;
