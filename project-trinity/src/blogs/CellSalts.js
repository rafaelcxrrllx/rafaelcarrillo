import '../styling/Genesis.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import backArrow from '../assets/icons/arrow-back.svg'
import cellsalts from '../assets/cellsalts.jpeg'
import Zodiac from '../components/Zodiac';
import rightArrow from '../assets/icons/arrow-right.svg'
import ScrollToTop from '../components/ScrollToTop';

function CellSalts() {


    return (

    <div>
              

    <Nav/>
        <Link id='item-link' to="/blog">
            <motion.div
            initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
            transition={{ duration: 1 }}
            className="blog-back-container">
                {/* <div className='back-container'>
                    <img className="arrow" src={backArrow}/>
                    <p className='stay-blue'>
                        Back to Blog
                    </p>
                </div> */}
            </motion.div>
        </Link>
        <motion.div 
            initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
            transition={{ duration: 1 }}
            className='blog-img-container'>
            <img src={cellsalts}  alt="Zodiac Wheel: Astro-Chemico-Physiological and Chromatic Chart"/>
        </motion.div> 
        <motion.div
        initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
        animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
        transition={{ duration: 1 }}
        className="blog-back-container">
            <div className='genesis-main-container'>
                <div className='title-container'>
                    <p className='stay-white'>
                        22 June, 2024
                    </p>
                    <h1 className='stay-white' id='title'>
                        The Cell Salts of Salvation
                    </h1>
                    
                </div>
                    <div className='genesis-container'>
                        <div className='blog-text-container'>
                        
                            <p>
                            <span className='start-letter'>
                                T
                            </span>
                            
                                his is an introduction to The Cell Salts of Salvation 
                                where I will give a brief summary on each Zodiac and its corresponding 
                                cell salt it is associated with. 
                            </p>
                            
                            <p>
                                This wheel is based on the work done by 
                                Dr. George W. Carey, a famous biochemist and astrologer 
                                from the 1900s. His work and discoveries will help 
                                mankind free itself from ignorance, and finally place 
                                the stars rightfully where they belong! For centuries, 
                                astrology has been poisoned, perverted, and awfully 
                                misunderstood due to the lack of chemical, 
                                biological, astrological, and anatomical wisdom. These 
                                subjects in modern day have been completely perverted, 
                                leaving mathematics as one of the last true mediums of truth, 
                                where everything else has been manipulated and polluted. 

                            </p>
                            <div className='quote'>
                                <p>
                                    “It must always be remembered that astrology is the consideration of the body of the universe and, by analogy, the anatomy, therefore, of man.” 
                                </p>
                                <p>
                                    - Dr George W. Carey (1845 - 1924)
                                </p>
                            </div>
                            <p>Please select a Zodiac to read a short summary:</p>
                           
                            <Zodiac/>

                            
                            <h2>
                                Conclusion
                            </h2>
                            <p>
                                This is but a taste of the Cell Salts of Salvation by Dr George Carey. Sufficient to be understood, and 
                                to be pursued with curiosity. When one embarks on this story in great detail, he will be left speechless. 
                                As it is indeed, the unspoke wheel. 
                            </p>
                           
                          
                           


                            <h2>
                                Post-morteum thoughts:
                            </h2>
                            <p>
                                I feel very accomplished making this zodiac wheel. It lives in the ether, beyond me and anyone else. For this wheel
                                is above us. This is not my opinion, it is truth. Aligned with the truth, and contributing to the Great Work. 
                            </p>
                          
                            <p>
                                Amen. 
                            </p>
                        </div>
                    </div>
            </div>
        </motion.div>

        <div className='blog-link-container'>

    <Link id='item-link' to="/blog/theholymountain">
            <motion.div
            initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
            transition={{ duration: 1 }}
            className="blog-prev-container">
                <div className='back-container'>
                    <img className="arrow" src={backArrow}/>
                    <p>
                        Chapter IV
                    </p> 
                </div>
            </motion.div>
        </Link>
        
        
        <Link id='item-link' to="/blog/theantichrist">
            <motion.div
            initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
            transition={{ duration: 1 }}
            className="blog-next-container">
                <div className='back-container'>
                    
                    <p>
                        Chapter VI
                    </p> 
                    <img className="arrow" src={rightArrow}/>
                </div>
            </motion.div>
        </Link>
    </div>

    <Footer/>
    </div>
  );
}

export default CellSalts;
