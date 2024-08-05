import '../styling/Genesis.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import backArrow from '../assets/icons/arrow-back.svg'
import fullmetal from '../assets/fullmetal.jpeg'
import philosopherstone from '../assets/philosopherstone.jpeg'
import philosopherstonetwo from '../assets/philosopherstonetwo.jpg'
import oroboros from '../assets/oroboros.svg'
import edward from '../assets/edward.jpeg'
import dooroftruth from '../assets/doorone.jpeg'
import tree from '../assets/treeoftruth.svg'
import fullmetalAlchemist from '../assets/fullmetalAlchemist.jpeg'
import rightArrow from '../assets/icons/arrow-right.svg'
import ScrollToTop from '../components/ScrollToTop';

function FullMetal() {


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
            <img src={fullmetalAlchemist}  alt="Art by Khalil Gibran"/>
        </motion.div> 
        <motion.div
            initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
            transition={{ duration: 1 }}
            className="blog-back-container">
            <div className='genesis-main-container'>
                <div className='title-container'>
                    <p className='stay-white'>
                        16 June, 2024
                    </p>
                    <h1 className='stay-white' id='title'>
                        The Law of Equivalent Exchange
                    </h1>
                    
                </div>
                    <div className='genesis-container'>
                        <div className='blog-text-container'>
                        
                            <p>
                            <span className='start-letter'>
                                A
                            </span>
                            ll things are made from one, and all things will return to one. 
                            In other words, one is all. By means of one, we have all, within one, 
                            all things exist. Without the whole, there is no piece.
                            </p>
                            <p>
                            Alchemy (錬金術 Renkinjutsu) is the knowledge, analysis, and recreation 
                            of the laws and the currents within that exist within substances.
                            </p>
                            <div className='quote'>
                                <p>
                                    Humankind cannot gain anything without first giving something in return. 
                                    To obtain, something of equal value must be lost. That is 
                                    Alchemy's First Law of Equivalent Exchange. 
                                </p>
                                <p>
                                    - FullMetal Alchemist: Brotherhood
                                </p>
                            </div>
                            
                            <p>
                                This article containers spoilers from the anime FullMetal Alchemist: Brotherhood. 
                                Please avoid this article if you do not wish to see any spoilers!
                            </p>
                            <h2>
                                FullMetal Alchemist: Brotherhood
                            </h2>
                           
                            <p>
                            I recently finished FullMetal Alchemist: Brotherhood, and it was 
                            one of the best animes I have seen. With a total of 64 episodes, 
                            this anime is listed as one of the top 10 animes in all of history. 
                            I highly recommend anyone to watch this anime released back in 2009. 
                            </p>
                            <p>
                                The plot goes: 
                            </p>
                            <p>
                                "Brothers Edward and Alphonse Elric search for the Philsopher's Stone, 
                                hoping to restore their bodies, which were lost when they attempted to 
                                use their alchemy skills to resurrect their deceased mother. Edward,
                                who lost only limbs, joins the State Military, which gives him the
                                freedom to continue the search as he tries to restore his brother, 
                                whose soul is tethered to earth by a suit of armor. However, Edward 
                                and Alphonse are not the only ones seeking the powerful stone. And as 
                                they search, they learn of a plot to transmute the entire country for
                                reasons they cannot comprehend."
                            </p>
                            <p>
                                This show has so much meaning, and to put it simply, this was one of my biggest 
                                takeaways from the show.
                            </p>
                            <div className='quote'>
                                <p>
                                "The Universe is the All, and you are the One. 
                                All's existence and ability to move forward is dependent 
                                on this law. The universe is might infinite, but little 
                                things like structures, planets, people and animals are what 
                                keeps it going: If you die, the world continues on, you will 
                                decompose, became nutrients for plants, herbivores eat those 
                                plants, and carnivores eat the herbivores, they die, and life 
                                starts over. The Universe always moves forward, a constant cycle. 
                                It is the one thing that binds All together... That it is alchemy 
                                itself...One is All, All is one.
                                </p>
                                <p>
                                    - The Elric Brothers, FullMetal Alchemist: Brotherhood
                                </p>
                            </div>

                            <div className='blog-img'>
                                <img src={fullmetal}  alt="zodiac wheel"/>
                                <p className='stay-white'>
                                    FullMetal Alchemist: Brotherhood, 2009
                                </p>
                            </div>
                            
                           
                            <h2>
                                The Philosopher's Stone
                            </h2>
                            <p>
                             According to The FullMetal Alchemist, "The Philosopher's Stone is synthesized from human
                             souls, requiring the sacrifice of many lives. This grim method 
                             involves an alchemical procedure known as human transmutation, 
                             where the souls of multiple individuals are bonded together to 
                             form the stone."
                            </p>
                            
                           
                            
                            <p>
                                According to Google, adding and mixing compounds encountered in nature – primarily sulfur and mercury were used
                                to create The Philosopher's Stone. However like most occult wisdom, I believe there is more than
                                meets the eye. 
                            </p>
                            <div className='quote'>
                                <p>
                                    "<i>Magnum Opus </i>is Latin for 'The Great Work'. By working with the Prima Materia and creating the 
                                    Philosopher's Stone. 
                                </p>
                                <p>
                                    - DivineBeingBeingDivine, 2020
                                </p>
                            </div>
                            
                            <div className='blog-img'>
                                <img src={philosopherstone}  alt="Birth of the Philosopher's Stone, 1745 depicts an alchemist in a dimly lit laboratory, intensely focused on a glowing stone amidst shelves of ancient books and bubbling potions, capturing the mystical moment of alchemical discovery"/>
                                <p className='stay-white'>
                                    Birth of the Philosopher's Stone, 1745
                                </p>
                            </div>

                            <p>
                                The image above is also known as 'The Hermetical Triumph'. 
                                The sun and moon represent masculine and feminine energy in union. 
                                The two snakes representing the two thieves aka the motor and sensor nerves (Refer to Chapter 2: Mercury).
                                The Ram, Bull, and Twins above represent Aries, Taurus, and Gemini, the first three 
                                zodiacs. The Ram represents the Higher Mind, the cerebrum, while the Bull represents
                                the Lower Mind, the cerebullem. The twins represent Genesis, or the origin of man, ruled by Mercury (Hermes).  
                                The triangle topped on a Greek cross is the sign for Sulpher.
                                To the Greek alchemists, sulfur was the “psyche” or “psychi” - the soul of man. 
                                Within the triangle of the sign of Sulphur, I believe there is a white pheonix, 
                                representing pure rebirth from the ashes, coinciding with the idea of man being
                                able to be reborn from his ashes. 
                               
                                
                            </p>
                         
                            <div className='quote'>
                                <p>
                                    "The pheonix is the very symbol of self sacrifice, as it dies unto itself, to become reborn, resurrected
                                    anew from the ashes of its own pyrofication. By sacrificing
                                    or "making sacred" the serpent within us, to feed our rising pheonix, 
                                    we are able to become a healthy balanced human beings"
                                </p>
                                <p>
                                    - DivineBeingBeingDivine, 2020
                                </p>
                            </div>
                            <p>
                                A true alchemist is able to create the Philosopher's Stone
                                using his primary materials which make up the human body in order to 
                                regenerate the soul of man.
                                Do recall this stone is said to regenerate man, very similar
                                to what Mercury or Hermes is said to do, heal and regenerate man. 
                            </p>

                            <p>
                                According to God-Man: The Word Made Flesh, 
                                "The highest aspect of alchemy is the regeneration 
                                of man in the Spirit of God from the material elements 
                                of his physical body. The physical body itself is 
                                the greatest of mysteries, because in it are contained,
                                in a condensed, solidified and corporeal state, the 
                                very essences which go to make up the substance of 
                                the material man, and this is the secret of the 
                                'Philosopher's Stone.' The sign in which the true 
                                alchemist works is the cross, because man, standing 
                                erect among his brothers of the animal kingdom, roots 
                                with his material elements in the earth, penetrates with 
                                his soul through the elementary forces of nature to suffer 
                                and die, but his head reaches above the animal creation 
                                into the pure atmosphere of heaven."
                            </p>

                            

                            <h2>
                               The Perfect Being
                            </h2>
                            <div className='blog-img'>
                                <img src={philosopherstonetwo}  alt="Hermetic Vase, Unkown Artist"/>
                                <p className='stay-white'>
                                Hermetic Vase, Unkown Artist
                                </p>
                            </div>
                            <p>
                                What I really wish to point out in the image above is the
                                sword and scales that the alchemist holds next to the Hermetic Vase.
                                This is the sacred balance between masculine and feminine energy. 
                                Natural Law. TRUTH. The eleventh tarot card Justice also shows a king
                                holding scales on his left hand and lifting a sword on his right. 
                            

                            </p>

                            <p>
                                The creation of the Philosopher's Stone to many is still just a myth and old 
                                folklore you tell your kids. But to those who have began their path towards enlightment know
                                that there is a hidden power within us. This power can only be created and destroyed
                                by us, humans. 
                            </p>

                            <div className='quote'>
                                <p>
                                "Alchemy is the linking of physical and spiritual forces
                                of nature into one. Body and Soul. Heaven and Earth, Physics and Metaphysics."
                                </p>
                                <p>
                                    - The Hearth Book, 2020
                                </p>
                            </div>

                            <h2>
                                The Two Gates
                            </h2>
                            <div className='blog-img'>
                                <img src={dooroftruth}  alt="Gate of Truth, FullMetal Alchemist: Brotherhood"/>
                                <p className='stay-white'>
                                Gate of Truth, FullMetal Alchemist: Brotherhood
                                </p>
                            </div>
                            <div id="white-background" className='blog-img'>
                                <img src={tree}  alt=" George Ripley's Marrow of Alchemy"/>
                               
                            </div>
                            <p className='stay-white'>
                                George Ripley's Marrow of Alchemy
                                </p>
                           
                            <p>
                               I might go deep into these images above in an upcoming blog, 
                               but for now I will leave them here for reference. The first Gate is
                               the Gate of Truth: the source of alchemical knowledge and the entrance to God's domain, where no mortals are meant to tread.
                               The second gate is depicted from George Ripley's Marrow of Alchemy. This door 
                               appears behind Al's body. 
                            </p>
            
                            

                            <h2>
                                Conclusion
                            </h2>
                            <p>
                                At the end of FullMetal Alchemist, the antagonist lost because
                                he chose to persue the path of the perfect being, detaching 
                                his sins and becoming one with God. This ending baffled me, 
                                just because for the past year, I have been choosing this same path. 
                                It is truly torturing when Truth shows up to your door and you have
                                no choice but to clean up the mess you have made. 
                            </p>
                           
                            <div className='quote'>
                                <p>
                                "What gives you proper despair. so that you do not become boastful, is truth"
                                </p>
                                <p>
                                    - The Truth, FullMetal Alchemist: Brotherhood
                                </p>
                            </div>
                            <p>
                                I think I understand why choosing the 'perfect' path leads to your own despair. 
                                The truth is, only truth is perfect.
                                When one chooses perfection, he chooses to detatch from his very own humanity. 
                                But when one chooses truth, he chooses the path closest to his soul. 
                            </p>
                            <p>
                                We are all but mere humans. We cannot choose to sacrifice others, for the 
                                sake of our own desires. If we wish to obtain what we want, we must sacrifice 
                                ourselves. This does not sound reaffirming, but know that the Pheonix rises
                                from its own ashes. 
                            </p>
                            <div className='quote'>
                                <p>
                                "A lesson without pain is meaningless. That's because no one
                                 can gain without sacrificing something. But by enduring that
                                  pain and overcoming it, he shall obtain a powerful, unmatched heart.
                                A fullmetal heart."

                                </p>
                                <p>
                                    - Edward Elric, FullMetal Alchemist: Brotherhood
                                </p>
                            </div>


                            <h2>
                                Post-morteum thoughts:
                            </h2>
                            <p>
                                Before I wrap up, I want to point out two different emblems. Please take a look at the Flamel Emblem on Edward's coat. 
                            </p>
                            <div className='blog-img'>
                                <img src={edward}  alt="zodiac wheel"/>
                                <p className='stay-white'>
                                Edward Elric, FullMetal Alchemist: Brotherhood
                                </p>
                            </div>
            
                            <p>
                                Please refer to Chapter 2: Mercury in regards to the 
                                hidden symbolism on the winged serpent on the cross. 
                                I really loved seeing State Alchemists bear this sign, 
                                as it holds so much esoteric meaning. Note the name of
                                this logo is called,  "Flamel", sounding very like Flame, 
                                it further proves the spiritual flame that burns from the 
                                Kundalini, as it rises from the lower mind to the higher mind, 
                                achieving its wings and crown.  
                            </p>
                            <p>
                                Now take a look at the Oroboros Emblem on
                                the Homuculus. 
                            </p>
                            <div className='blog-img'>
                                <img src={oroboros}  alt="Oroboros, FullMetal Alchemist: Brotherhood"/>
                                <p className='stay-white'>
                                Homuculus Stamp: Oroboros, FullMetal Alchemist: Brotherhood  
                                </p>
                            </div>
                           
                            <p>
                                The Ouroboros is a symbol in Fullmetal Alchemist 
                                that represents the eternal cycle of destruction and rebirth.
                                A tail-eating snake is called an ouroboros, 
                                from the Greek word that literally means tail-eating. In Hinduism, 
                                this tail-eating snake is also represented as a wheel of 'endless suffering'
                                known as Samsara. 
                            </p>
                            <p>
                                Regardless of its personification, the symbolization remains the same, 
                                infinite birth, decay, and death. Humunculus, 
                                an artificial humanoid created using a Philosopher's Stone, beared this sign
                                as a representation of their own birth which came from destruction. 
                                To live is to consume, and to consume is to destroy and create. 
                                This endless cycle does not lead to Truth, but Ignorance. The six-sided star
                                represents the union of masculine and feminine. The negative aspects 
                                of this union is uncontrollable passion, which is driven by worldy sensations. Thus, 
                                it would make sense why each Homunculus was a deadly sin. To be consumed by your own
                                passions, that is truly the birth and death of the son of man. 

                            </p>
                            
                       
                            <p>
                                Amen. 
                            </p>
                        </div>
                    </div>
            </div>
        </motion.div>
        <div className='blog-link-container'>

        <Link id='item-link' to="/blog/mercury">
            <motion.div
            initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
            transition={{ duration: 1 }}
            className="blog-prev-container">
                <div className='back-container'>
                    <img className="arrow" src={backArrow}/>
                    <p>
                        Chapter II
                    </p> 
                </div>
            </motion.div>
        </Link>
        
        
        <Link id='item-link' to="/blog/theholymountain">
            <motion.div
            initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
            transition={{ duration: 1 }}
            className="blog-next-container">
                <div className='back-container'>
                    
                    <p>
                        Chapter IV
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

export default FullMetal;
