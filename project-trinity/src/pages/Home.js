// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Home.css'

// Components
import Carousel from '../carousels/Carousel';
import Nav from '../components/Nav';

// Assets
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import SpotifyNow from '../components/SpotifyNow';
import ScrollingText from '../components/scrollingText';
import ScrollToTop from '../components/ScrollToTop';
import LoadingScreen from '../components/LoadingScreen';


function Home() {
  // "homepage": "https://rafaelcxrrllx.github.io/trinityla",

  return (
    <div>
      <LoadingScreen/>
      <Nav/>
      <motion.div 
        initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
        animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
        transition={{ duration: 2, delay: 1.5 }}
        className='home-container'
        id="home">
      
      <h1 className='main-title'>USER EXPERIENCE DESIGNER©</h1>
      <p>CURRENTLY AVAILABLE FOR CRAFTING EXPERIENCES</p>
      <ScrollingText/>

      <div id="desktop-row" className='row'>
          <div className='col'>
          <Carousel/>
          </div>
          <div className='col'>
              <div className='col-container'>
              <p className='home-title'>Rafael Carrillo</p>
              
              <div id="mobile-flour" className='flourescent'></div>
              <p className='subtitle'><i>UXUI Designer / Full-Stack Developer </i>based out of <b>Los Angeles California.</b></p>
              
              </div>
          </div>
      </div>

  
      <div id="desktop-flour" className='flourescent'></div>
      <div className='spotify-container'>
        <SpotifyNow/>
      </div>
      
      
      </motion.div>
      <Footer/>
    </div>
  );
}

export default Home;
