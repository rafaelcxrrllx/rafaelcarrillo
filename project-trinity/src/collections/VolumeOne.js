// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Shop.css'

// Components
import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {motion} from 'framer-motion'

import MasonryLayout from '../components/MasonryLayout';
import beemer from '../assets/actOne/beemer.jpg';
import divinefeminine from '../assets/actOne/divinefeminine.jpg';
import e46 from '../assets/actOne/e46.jpg';
import sun from '../assets/actOne/sun.jpg';
import luna from '../assets/actOne/luna.jpg';
import mirror from '../assets/actOne/mirror.jpg';
import stars from '../assets/actOne/stars.jpg';
import virtues from '../assets/actOne/virtues.jpg';
import mountain from '../assets/actOne/mountain.jpg';
import rainbow from '../assets/actOne/rainbow.jpg';
import mother from '../assets/actOne/mother.jpg';
import rainbowTwo from '../assets/actOne/rainbowTwo.jpg';
import vette from '../assets/actOne/vette.jpg';
import zmlk from '../assets/actOne/ZMLK.jpg';
import trinity from '../assets/actOne/trinity.jpg';
import trinityTwo from '../assets/actOne/trinityTwo.jpg';
import areYou from '../assets/actOne/areYou.jpg';
import scott from '../assets/actOne/scott.jpg';
import logo from '../assets/actOne/logo.jpg';
import logoSky from '../assets/actOne/logoSky.jpg';
import logoFire from '../assets/actOne/logoFire.jpg';
import mary from '../assets/actOne/mary.jpg';
import la from '../assets/actOne/la.jpg';
import sunflowers from '../assets/actOne/sunflowers.jpg';
import jupiter from '../assets/actOne/jupiter.jpg';
import trinityMoon from '../assets/actOne/trinityMoon.jpg';
import trinityGreen from '../assets/actOne/trinityGreen.jpg';
import moon from '../assets/actOne/moon.jpg';
import notlikeus from '../assets/actOne/notlikeus.jpg';
import alpaca from '../assets/actOne/alpaca.jpg';
import snot from '../assets/actOne/snot.jpg';
import mac from '../assets/actOne/mac.jpg';
import ScrollToTop from '../components/ScrollToTop';




function VolumeOne() {


    const items = [
        { id: 1, src: logoSky, alt: '1' },
        { id: 2, src: sun, alt: '2' },
        { id: 3, src: luna, alt: '3' },
        { id: 4, src: vette, alt: '4' },
        { id: 5, src: trinityGreen, alt: '5' },
        { id: 6, src: alpaca, alt: '6' },
        { id: 7, src: mac, alt: '26' },
        { id: 8, src: areYou, alt: '7' },
        { id: 9, src: trinityTwo, alt: '8' },
        { id: 10, src: rainbowTwo, alt: '9' },
        { id: 11, src: mirror, alt: '10' },
        { id: 12, src: beemer, alt: '11' },
        { id: 13, src: logoFire, alt: '12' },
        { id: 14, src: stars, alt: '13' },
        { id: 15, src: divinefeminine, alt: '14' },
        { id: 16, src: e46, alt: '15' },
        { id: 17, src: scott, alt: '16' },
        { id: 18, src: trinity, alt: '17' },
        { id: 19, src: sunflowers, alt: '18' },
        { id: 20, src: mountain, alt: '19' },
        { id: 21, src: snot, alt: '26' },
        { id: 22, src: mary, alt: '20' },
        { id: 23, src: virtues, alt: '21' },
        { id: 24, src: mother, alt: '22' },
        { id: 25, src: logo, alt: '23' },
        { id: 26, src: la, alt: '24' },
        { id: 27, src: jupiter, alt: '25' },
        { id: 28, src: moon, alt: '27' },
        { id: 29, src: trinityMoon, alt: '26' },
        { id: 30, src: notlikeus, alt: '28' },

        // Add more items as needed
      ];

  return (


    <div className='home-container'>
            

    <Nav/>
    <motion.div
    initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
    animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
    transition={{ duration: 1 }}>
    <p className='title'>
      Volume One
    </p>

    <br/>
    <br/>
    <MasonryLayout items={items} />

      
      
      </motion.div>
    <Footer/>
    </div>
  );
}

export default VolumeOne;
