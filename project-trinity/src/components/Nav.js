
// Global Styling
import '../styling/styles.css';

// Local Styling
import '../styling/Nav.css';
import '../styling/Menu.css';


// Components
import React, { useState, useEffect } from 'react';

// Assets
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Nav() {


const [menuOpen, setMenuOpen] = useState(false);



const handleToggleMenu = () => {
  setMenuOpen(!menuOpen);
};

useEffect(() => {
  // Add or remove body class based on menuOpen state
  if (menuOpen) {
      document.body.classList.add('menu-open');
  } 
  else {

    document.body.classList.remove('menu-open')
  }

  // Function to handle window resize
  const handleResize = () => {
      if (window.innerWidth > 1025) {
          setMenuOpen(false);
      }
  };

  // Add the event listener
  window.addEventListener('resize', handleResize);

  // Initial check to hide the menu if screen width is already above 725px
  handleResize();

  // Clean up event listener on component unmount
  return () => {
      window.removeEventListener('resize', handleResize);
  };
}, [menuOpen]);




  return (
    <nav className="navbar">
      <div className="navbar-emblem">
        <Link 
          className='landing-page-link' to="/home">
            <motion.p 
            initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
            transition={{ duration: 2, delay: 1.5 }}
            className='logo'>RAFAEL CARRILLO
          </motion.p>
        </Link>
        <motion.div 
           initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
           animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
           transition={{ duration: 2, delay: 1.5 }}
          className="left-menu">
          <a id='landing-page-link' className="hover-underline" href="#about"> ABOUT </a>
          <a id='landing-page-link' className="hover-underline" href="#work"> WORK </a>
          <a id='landing-page-link' download="Resume.pdf" className="hover-underline" href={require("../assets/Resume/Resume.pdf")}> RESUME </a>
        </motion.div>
        <motion.div 
        id="menu"
        initial={{ height: 0, opacity: 0 }}
        animate={menuOpen ? { height: '100%', opacity: 1, top: '50px' } : { height: 0, opacity: 0 }}
        transition={{ duration: .3 }}
        style={menuOpen ? { position: 'fixed', backgroundColor: '#EFEFEF', top: '0'}: {display: 'none'}}>
        <div className='flourescent-nav'></div>

        <motion.ul 
          initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
          animate={menuOpen ? { y: 0, opacity:  1 }: {y: '3vw', opacity: 0} } // Animate opacity to 1
          transition={{ duration: 1 }}
          className="hamburger-menu">
       
          <li className='extra-bold'><Link className='landing-page-link' to="/about"> ABOUT </Link></li> 
          <li className='extra-bold'><Link className='landing-page-link' to="/work"> WORK </Link></li>
          <li className='extra-bold'><Link className='landing-page-link' to="/contact"> CONTACT </Link></li>
          <li className='extra-bold' id="location">los angeles, ca</li> 
          
        </motion.ul>
      </motion.div>
      </div>
      <div className="nav-menu">
        <motion.div
           initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
           animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
           transition={{ duration: 2, delay: 1.5 }} 
          className='nav-right-container'>
        <Link id='landing-page-link' className="hover-underline" to="/contact"> CONTACT </Link>
        <Link id='landing-page-link'> LOS ANGELES, CA </Link>
        </motion.div>
      </div>
      <div className='menu-container'>
        <div>
          <motion.div 
            initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
            transition={{ duration: 2, delay: 1.5 }}
            className="hamburger-container" onClick={handleToggleMenu}>
            <motion.ul 
            className="hamburger">
              <motion.li 
                animate={{  y: menuOpen ? 8: 0, x: menuOpen ? 1: 0, rotate: menuOpen ? 45: 0, scale: menuOpen ? .9: 1}}
                transition={{ duration: 0 }}></motion.li>
              <motion.li 
                animate={{y: menuOpen ? -1: 0, x: menuOpen ? -0: 0, rotate: menuOpen ? -45: 0, scale: menuOpen ? .9: 1}}
                transition={{ duration: 0 }}></motion.li>
                {/* <motion.li 
                animate={{y: menuOpen ? 1: 0, rotate: menuOpen ? 0: 0}}
                transition={{ duration: 0 }}></motion.li> */}
              
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
