// Global Styling
import '../styling/styles.css';

// Local Styling
import '../styling/NavBar.css';

// Components
import React, { useState, useEffect } from 'react';

// Assets
import logo from '../assets/logo.svg'
import instagram from '../assets/icons/instagram.svg'
import linkedIn from '../assets/icons/linkedIn.svg'
import menu from '../assets/icons/menu.svg'
import closeMenu from '../assets/icons/closeMenu.svg'
import github from '../assets/icons/github.svg'

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isFirstImage, setIsFirstImage] = useState(true);

  // Paths to the images
  const firstImage = menu;
  const secondImage = closeMenu;

  const handleMenuItemClick = () => {
    setMenuOpen(false); // Close the menu when a list item is clicked
    setIsFirstImage(true);

  };

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
    
  };

  // Toggle function
  const handleToggle = () => {
    setIsFirstImage(!isFirstImage); // Switch the image state
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
        if (window.innerWidth > 810) {
          setMenuOpen(false);
          if (!menuOpen) {
            setIsFirstImage(true); // Reset to the first image when the menu opens
          }
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

      <Link 
        className='logo' to="/home">
          <motion.img 
            src={logo} alt="logo" /> 
      </Link>

      <div className="navbar-menu">
        <motion.div
          initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
          animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
          transition={{ duration: 1, delay: 1.5 }} 
          className='navbar-right-container'>
          <a id='landing-page-link' className="hover-underline" href="#home"> Home </a>
          <a id='landing-page-link' className="hover-underline" href="#projects"> Projects </a>
          <a id='landing-page-link' download="RafaelCarrillo.pdf" className="hover-underline" href={require("../assets/Resume/Resume.pdf")}> Resume </a>
          <a id='landing-page-link' className="hover-underline" href="#bio"> Bio </a>
          <a id='landing-page-link' className="hover-underline" href="#contact"> Contact </a>
          <div className='spacer'></div>
          <a class="hot-links" href="https://www.linkedin.com/in/rafaelcxrrllx/"><img src={linkedIn} alt="LinkedIn" /> </a>
          <a class="hot-links" href="https://github.com/rafaelcxrrllx"><img src={github} alt="GitHub" /> </a>
          <a class="hot-links" href="https://www.instagram.com/rafaelcxrrllx/"><img src={instagram} alt="instagram" /> </a> 
        </motion.div>
      </div>

      <div className="mobile-navbar-menu">
        <motion.div
          initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
          animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
          transition={{ duration: 1, delay: 1.5 }} 
          className='mobile-navbar-right-container'>
          <a class="hot-links" href="https://www.linkedin.com/in/rafaelcxrrllx/"><img src={linkedIn} alt="LinkedIn" /> </a>
          <a class="hot-links" href="https://github.com/rafaelcxrrllx"><img src={github} alt="GitHub" /> </a>
          <a class="hot-links" href="https://www.instagram.com/rafaelcxrrllx/"><img src={instagram} alt="instagram" /> </a> 
          <div onClick={handleToggleMenu}>
            <img
              className='mobile-hamburger'
              src={isFirstImage ? firstImage : secondImage}
              alt="Toggleable"
              onClick={handleToggle}
              style={{ cursor: "pointer", width: "36px" }}/>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="mobile-menu"
        initial={{ height: 0, opacity: 0 }}
        animate={menuOpen ? { height: '100%', opacity: 1, top: '50px' } : { height: 0, opacity: 0 }}
        transition={{ duration: .3 }}
        style={menuOpen ? { position: 'fixed', backgroundColor: '#212121', top: '0px'}: {display: 'none'}}>
        <motion.ul 
          initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
          animate={menuOpen ? { y: 0, opacity:  1 }: {y: '3vw', opacity: 0} } // Animate opacity to 1
          transition={{ duration: 1 }}
          className="hamburger-menu">
          <li onClick={handleMenuItemClick} className='extra-bold'><a id='landing-page-link' href="#home"> Home </a> </li> 
          <li onClick={handleMenuItemClick} className='extra-bold'><a id='landing-page-link' href="#projects"> Projects </a></li>
          <li onClick={handleMenuItemClick} className='extra-bold'><a id='landing-page-link' download="RafaelCarrillo.pdf" href={require("../assets/Resume/Resume.pdf")}> Resume </a></li>
          <li onClick={handleMenuItemClick} className='extra-bold'><a id='landing-page-link' href="#bio"> Bio </a></li>
          <li onClick={handleMenuItemClick} className='extra-bold'><a id='landing-page-link' href="#contact"> Contact </a></li>
        </motion.ul>
      </motion.div>
    </nav>
  );
}

export default NavBar;
