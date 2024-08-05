import '../styling/Genesis.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import backArrow from '../assets/icons/arrow-back.svg'
import gibran from '../assets/gibranArt.jpeg'
import rightArrow from '../assets/icons/arrow-right.svg'
import ScrollToTop from '../components/ScrollToTop';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function Genesis() {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    


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
            <img src={gibran}  alt="Art by Khalil Gibran"/>
        </motion.div> 
        <motion.div
        initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
        animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
        transition={{ duration: 1 }}
        className="blog-back-container">
            <div className='genesis-main-container'>
                <div className='title-container'>
                    <p className='stay-white'>
                        11 June, 2024
                    </p>
                    <h1 className='stay-white' id='title'>
                        Genesis
                    </h1>
                </div>
                    <div className='genesis-container'>
                        <div className='blog-text-container'>
                            
                            <p>
                            <span className='start-letter'>
                                P
                            </span>
                                ost-morteum thoughts: I know you want to be great. And trust me, you are. 
                                This world is governed by a power that has been around longer than anyone alive now can remember. 
                                I ask myself, where is the freedom to those born from a womb? As soon as we are delivered, we 
                                begin to be manufactured into a common person with hopes, dreams, desires, and fears. 
                                But are these imposed onto us or do we choose them in free-spirit?
                            </p>
                            <div className='blog-img'>
                                <img src={gibran}  alt="A hand with an eyeball placed centered on the palm facing forward. A group of angel-like
                                beings sworm around the hand in unison forming a circle"/>
                                <p className='stay-white'>
                                    Art by Khalil Gibran, 1923
                                </p>
                            </div>
                            <p>
                                I ask myself everyday whether I am living for me or am I living for someone else. Whether 
                                this other person is physically a person or an entity, it doesnt matter to me. I am an extension
                                of God, as long as my heart is just and pure, none of my actions will be made for others. 
                                I choose me. I want to help the world, not feed into its corrupt system imposed by man. 
                                As a soon graduating college student, this thought haunts my mind. 
                            </p>
                            <p>
                                I do not know what the future has waiting for me, but I know that I am manifesting a beautiful reality with me in it. 
                                I will have everything I dream of, as long as I stay connected with my higher self. A king and his horse. No matter who
                                or what comes in my path, I know that I am a golden star. No one can take that away from me. I may become heavy and dark,
                                 but my true self will always be there. Waiting for me to call his name and let him in. I am only a vehicle for the soul. 
                                My light will never deminish and I will never stop growing and working for my higher self. 
                            </p>
                    
            
                           
                            <div className='quote'>
                                <p>
                                    "Your pain is the breaking of the shell that encloses your understanding. 
                                    Even as the stone of the fruit must break, that its heart may stand in the sun, so must you know pain."
                                </p>
                                <p>
                                    - Kahlil Gibran
                                </p>
                            </div>
                            <p>
                                I am ready. I am ready to step outside of my self, and begin to create freely to my heart's content. 
                                No matter what happens, I know where I came from and where I am going. I shall dedicate every second
                                of my life to freeing myself and humanity. The way I will do this is through change. 
                                As I change my self, I will change what is around me. Like a dominoe, I will be the first to break
                                the cyclical traumas that no longer need to be passed down. I am grateful for being a part of this experience. 
                            </p>
                            <p>
                                An embodiment of my higher self. I don't want fame or fortune. I just want to change the world. To get rid of all ways I was 
                                programmed to think that do not serve me, and truly surrender. I am grateful for my breathe, eyes, and all organs, limbs, 
                                textures that make up my body. I am divinity, living in my temple. I must no longer tarnish myself. I deserve the best. 
                            </p>
                            <p>
                                I will never be deceived or misguided from the truth. I will place complete and unquestioned fate onto my self, 
                                and begin the journey. No more distractions, no more worries, no more fears. I am Trinity: Mind, Body, and Soul. 
                                May your will be done through my efforts. 
                            </p>
        
                            <p>
                                Amen. 
                            </p>
                        </div>
                    </div>
            </div>
        </motion.div>

        <div className='blog-link-container'>

        <Link id='item-link' to="/blog/holytrinity">
            <motion.div
            initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
            transition={{ duration: 1 }}
            className="blog-prev-container">
                <div className='back-container'>
                    <img className="arrow" src={backArrow}/>
                    <p>
                        Chapter VII
                    </p> 
                </div>
            </motion.div>
        </Link>
        
        
        <Link id='item-link' to="/blog/mercury">
            <motion.div
            initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
            transition={{ duration: 1 }}
            className="blog-next-container">
                <div className='back-container'>
                    
                    <p>
                        Chapter II
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

export default Genesis;
