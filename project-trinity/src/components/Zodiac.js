import React, { useState } from 'react';
import "../styling/Zodiac.css"
import aries from '../assets/zodiacs/aries.svg'
import ariesdesktop from '../assets/zodiacs/cards/aries-card-desktop.svg'
import ariesCard from '../assets/zodiacs/cards/aries-card.svg'
import taurusdesktop from '../assets/zodiacs/cards/taurus-card-desktop.svg'
import taurusCard from '../assets/zodiacs/cards/taurus-card.svg'
import geminidesktop from '../assets/zodiacs/cards/gemini-card-desktop.svg'
import geminiCard from '../assets/zodiacs/cards/gemini-card.svg'
import cancerdesktop from '../assets/zodiacs/cards/cancer-card-desktop.svg'
import cancerCard from '../assets/zodiacs/cards/cancer-card.svg'
import leodesktop from '../assets/zodiacs/cards/leo-card-desktop.svg'
import leoCard from '../assets/zodiacs/cards/leo-card.svg'
import virgodesktop from '../assets/zodiacs/cards/virgo-card-desktop.svg'
import virgoCard from '../assets/zodiacs/cards/virgo-card.svg'
import libradesktop from '../assets/zodiacs/cards/libra-card-desktop.svg'
import libraCard from '../assets/zodiacs/cards/libra-card.svg'
import scorpiodesktop from '../assets/zodiacs/cards/scorpio-card-desktop.svg'
import scorpioCard from '../assets/zodiacs/cards/scorpio-card.svg'
import sagittariusdesktop from '../assets/zodiacs/cards/sagittarius-card-desktop.svg'
import sagittariusCard from '../assets/zodiacs/cards/sagittarius-card.svg'
import capricorndesktop from '../assets/zodiacs/cards/capricorn-card-desktop.svg'
import capricornCard from '../assets/zodiacs/cards/capricorn-card.svg'
import aquariusdesktop from '../assets/zodiacs/cards/aquarius-card-desktop.svg'
import aquariusCard from '../assets/zodiacs/cards/aquarius-card.svg'
import piscesdesktop from '../assets/zodiacs/cards/pisces-card-desktop.svg'
import piscesCard from '../assets/zodiacs/cards/pisces-card.svg'
import taurus from '../assets/zodiacs/taurus.svg'
import gemini from '../assets/zodiacs/gemini.svg'
import cancer from '../assets/zodiacs/cancer.svg'
import leo from '../assets/zodiacs/leo.svg'
import virgo from '../assets/zodiacs/virgo.svg'
import libra from '../assets/zodiacs/libra.svg'
import scorpio from '../assets/zodiacs/scorpio.svg'
import sagittarius from '../assets/zodiacs/sagittarius.svg'
import capricorn from '../assets/zodiacs/capricorn.svg'
import aquarius from '../assets/zodiacs/aquarius.svg'
import pisces from '../assets/zodiacs/pisces.svg'
import man from '../assets/zodiacs/man.svg'
import { motion } from 'framer-motion';

function Zodiac() {

  const [visibleDiv, setVisibleDiv] = useState(null);

  // Function to handle Aries click
  const handleAriesClick = () => {
    setVisibleDiv(visibleDiv === 'Aries' ? null : 'Aries');
  };

  // Function to handle Taurus click
  const handleTaurusClick = () => {
    setVisibleDiv(visibleDiv === 'Taurus' ? null : 'Taurus');
  };
   // Function to handle Gemini click
   const handleGeminiClick = () => {
    setVisibleDiv(visibleDiv === 'Gemini' ? null : 'Gemini');
  };
    // Function to handle Cancer click
    const handleCancerClick = () => {
    setVisibleDiv(visibleDiv === 'Cancer' ? null : 'Cancer');
  };

    // Function to handle Leo click
    const handleLeoClick = () => {
    setVisibleDiv(visibleDiv === 'Leo' ? null : 'Leo');
  };

    // Function to handle Virgo click
    const handleVirgoClick = () => {
    setVisibleDiv(visibleDiv === 'Virgo' ? null : 'Virgo');
  };
  // Function to handle Libra click
  const handleLibraClick = () => {
    setVisibleDiv(visibleDiv === 'Libra' ? null : 'Libra');
  };
    // Function to handle Scorpio click
    const handleScorpioClick = () => {
    setVisibleDiv(visibleDiv === 'Scorpio' ? null : 'Scorpio');
  };
  // Function to handle Sagittarius click
  const handleSagittariusClick = () => {
    setVisibleDiv(visibleDiv === 'Sagittarius' ? null : 'Sagittarius');
  };

  // Function to handle Capricorn click
  const handleCapricornClick = () => {
    setVisibleDiv(visibleDiv === 'Capricorn' ? null : 'Capricorn');
  };

  // Function to handle Aquarius click
  const handleAquariusClick = () => {
    setVisibleDiv(visibleDiv === 'Aquarius' ? null : 'Aquarius');
  };

    // Function to handle Pisces click
  const handlePiscesClick = () => {
    setVisibleDiv(visibleDiv === 'Pisces' ? null : 'Pisces');
  };
    return (

      <div className='zodiac-main-container'>
        {visibleDiv === 'Aries' && (
        <motion.div 
          style={{ margin: '0px', padding: '20px' }}
          initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
          animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
          transition={{ duration: 1 }}>
          <img className="desktop-card" src={ariesdesktop} alt="aries description" />
          <img className="card" src={ariesCard} alt="aries description" />

        </motion.div>
      )}
      {visibleDiv === 'Taurus' && (
        <motion.div 
          initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
          animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
          transition={{ duration: 1 }}
          style={{ margin: '0px', padding: '20px' }}>
          <img className="desktop-card" src={taurusdesktop} alt="taurus description" />
          <img className="card" src={taurusCard} alt="taurus description" />

        </motion.div>
      )}
       {visibleDiv === 'Gemini' && (
        <motion.div 
          initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
          animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
          transition={{ duration: 1 }}
          style={{ margin: '0px', padding: '20px' }}>
          <img className="desktop-card" src={geminidesktop} alt="gemini description" />
          <img className="card" src={geminiCard} alt="gemini description" />

        </motion.div>
      )}
      {visibleDiv === 'Cancer' && (
        <motion.div 
          initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
          animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
          transition={{ duration: 1 }}
          style={{ margin: '0px', padding: '20px' }}>
          <img className="desktop-card" src={cancerdesktop} alt="Cancer description" />
          <img className="card" src={cancerCard} alt="Cancer description" />

        </motion.div>
      )}
       {visibleDiv === 'Leo' && (
        <motion.div 
          initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
          animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
          transition={{ duration: 1 }}
          style={{ margin: '0px', padding: '20px' }}>
          <img className="desktop-card" src={leodesktop} alt="Leo description" />
          <img className="card" src={leoCard} alt="Leo description" />

        </motion.div>
      )}
        {visibleDiv === 'Virgo' && (
        <motion.div 
          initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
          animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
          transition={{ duration: 1 }}
          style={{ margin: '0px', padding: '20px' }}>
          <img className="desktop-card" src={virgodesktop} alt="Virgo description" />
          <img className="card" src={virgoCard} alt="Virgo description" />

        </motion.div>
      )}
        {visibleDiv === 'Libra' && (
        <motion.div 
          initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
          animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
          transition={{ duration: 1 }}
          style={{ margin: '0px', padding: '20px' }}>
          <img className="desktop-card" src={libradesktop} alt="Libra description" />
          <img className="card" src={libraCard} alt="Libra description" />

        </motion.div>
      )}

{visibleDiv === 'Scorpio' && (
        <motion.div 
          initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
          animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
          transition={{ duration: 1 }}
          style={{ margin: '0px', padding: '20px' }}>
          <img className="desktop-card" src={scorpiodesktop} alt="Scorpio description" />
          <img className="card" src={scorpioCard} alt="Scorpio description" />

        </motion.div>
      )}

{visibleDiv === 'Sagittarius' && (
        <motion.div 
          initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
          animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
          transition={{ duration: 1 }}
          style={{ margin: '0px', padding: '20px' }}>
          <img className="desktop-card" src={sagittariusdesktop} alt="Sagittarius description" />
          <img className="card" src={sagittariusCard} alt="Sagittarius description" />

        </motion.div>
      )}

      {visibleDiv === 'Capricorn' && (
        <motion.div 
          initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
          animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
          transition={{ duration: 1 }}
          style={{ margin: '0px', padding: '20px' }}>
          <img className="desktop-card" src={capricorndesktop} alt="Capricorn description" />
          <img className="card" src={capricornCard} alt="Capricorn description" />

        </motion.div>
      )}

      {visibleDiv === 'Aquarius' && (
        <motion.div 
          initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
          animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
          transition={{ duration: 1 }}
          style={{ margin: '0px', padding: '20px' }}>
          <img className="desktop-card" src={aquariusdesktop} alt="Aquarius description" />
          <img className="card" src={aquariusCard} alt="Aquarius description" />

        </motion.div>
      )}
      {visibleDiv === 'Pisces' && (
        <motion.div 
          initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
          animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
          transition={{ duration: 1 }}
          style={{ margin: '0px', padding: '20px' }}>
          <img className="desktop-card" src={piscesdesktop} alt="Pisces description" />
          <img className="card" src={piscesCard} alt="Pisces description" />

        </motion.div>
      )}
     
      <div className='zodiac-wheel-container'>
        
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 144, repeat: Infinity, ease: 'linear' }}
          class="zodiac-wheel">
          <div onClick={handleAriesClick} class="slice aries"><span><img  src={aries} alt="aries"/></span></div>
          <div onClick={handleTaurusClick} class="slice taurus"><span><img src={taurus} alt="taurus"/></span></div>
          <div onClick={handleGeminiClick} class="slice gemini"><span><img src={gemini} alt="gemini"/></span></div>
          <div onClick={handleCancerClick} class="slice cancer"><span><img src={cancer} alt="cancer"/></span></div>
          <div onClick={handleLeoClick} class="slice leo"><span><img src={leo} alt="leo"/></span></div>
          <div onClick={handleVirgoClick} class="slice virgo"><span><img src={virgo} alt="virgo"/></span></div>
          <div onClick={handleLibraClick} class="slice libra"><span><img src={libra} alt="libra"/></span></div>
          <div onClick={handleScorpioClick} class="slice scorpio"><span><img src={scorpio} alt="scorpio"/></span></div>
          <div onClick={handleSagittariusClick} class="slice sagittarius"><span><img src={sagittarius} alt="sagittarius"/></span></div>
          <div onClick={handleCapricornClick} class="slice capricorn"><span><img src={capricorn} alt="capricorn"/></span></div>
          <div onClick={handleAquariusClick} class="slice aquarius"><span><img src={aquarius} alt="aquarius"/></span></div>
          <div onClick={handlePiscesClick} class="slice pisces"><span><img src={pisces} alt="pisces"/></span></div>
        </motion.div>
      </div>
      

    
      </div>
		

    );
}

export default Zodiac;
