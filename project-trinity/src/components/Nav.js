
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
        <Link className='landing-page-link' to="/home"> <img  id="emblem" src={logo} alt="emblem of trinity la"/></Link>
        <motion.div 
        id="menu"
        initial={{ height: 0, opacity: 0 }}
        animate={menuOpen ? { height: '100%', opacity: 1, top: '100px' } : { height: 0, opacity: 0 }}
        transition={{ duration: .3 }}
        style={menuOpen ? { position: 'fixed', backgroundColor: '#070F19', top: '0'}: {display: 'none'}}>
        <div className='flourescent-nav'></div>

        <motion.ul 
          initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
          animate={menuOpen ? { y: 0, opacity:  1 }: {y: '3vw', opacity: 0} } // Animate opacity to 1
          transition={{ duration: 1 }}
          className="hamburger-menu">
        {/* <li><Link className='landing-page-link' to="/portfolio"> Portfolio </Link></li>
        <li><Link className='landing-page-link' to="/resume"> Resume </Link></li> */}
          {/* <li><Link className='landing-page-link' to="/shop"> Shop </Link></li> */}
          {/* <li><Link className='landing-page-link' to="/blog"> Blog </Link></li> */}
          {/* <li><Link className='landing-page-link' to="/collections"> Collections </Link></li> */}
          <li><Link className='landing-page-link' to="/about"> About </Link></li> 
          <li><Link className='landing-page-link' to="/contact"> Contact </Link></li>
          
        </motion.ul>
      </motion.div>
      </div>
      <div className="nav-menu">
        {/* <Link id='landing-page-link' className="hover-underline" to="/portfolio"> Portfolio </Link> */}
        {/* <Link id='landing-page-link' className="hover-underline" to="/portfolio"> Resume </Link> */}
        {/* <Link id='landing-page-link' className="hover-underline" to="/shop"> Shop </Link> */}
        {/* <Link id='landing-page-link' className="hover-underline" to="/blog"> Blog </Link> */}
        {/* <Link id='landing-page-link' className="hover-underline" to="/collections"> Collections </Link> */}
        <Link id='landing-page-link' className="hover-underline" to="/about"> About </Link>
        <Link id='landing-page-link' className="hover-underline" to="/contact"> Contact </Link>

      </div>
      <div className='menu-container'>
        <div>
          <div className="hamburger-container" onClick={handleToggleMenu}>
            <motion.ul 
            className="hamburger">
              <motion.li 
                animate={{  y: menuOpen ? 2: 0, x: menuOpen ? 10: 0, rotate: menuOpen ? 60: 0}}
                transition={{ duration: 0 }}></motion.li>
              <motion.li 
                animate={{y: menuOpen ? -7: 0, x: menuOpen ? -10: 0, rotate: menuOpen ? -60: 0}}
                transition={{ duration: 0 }}></motion.li>
                <motion.li 
                animate={{y: menuOpen ? 1: 0, rotate: menuOpen ? 0: 0}}
                transition={{ duration: 0 }}></motion.li>
              
            </motion.ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
