import '../styling/Genesis.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import backArrow from '../assets/icons/arrow-back.svg'
import mercury from '../assets/mercury.JPG'
import mercurytwo from '../assets/mercury-two.jpeg'
import moses from '../assets/moses.webp'
import rightArrow from '../assets/icons/arrow-right.svg'
import ScrollToTop from '../components/ScrollToTop';

function Mercury() {


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
                <img src={mercury}  alt="Mercury: The Messenger of the Gods"/>
            </motion.div> 
            <motion.div
                initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
                animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
                transition={{ duration: 1 }}
                className="blog-back-container">
                <div className='genesis-main-container'>
                    <div className='title-container'>
                        <p className='stay-white'>
                            12 June, 2024
                        </p>
                        <h1 className='stay-white' id='title'>
                            The Messenger of the Gods
                        </h1>
                    </div>
                    <div className='genesis-container'>
                        <div className='blog-text-container'>
                            <p>
                            <span className='start-letter'>
                                M
                            </span>
                                ercury, also known as Hermes and Toth, is the messenger of the gods, the mind-fluid.
                                Metaphysically, Mercury is mind; physiologically, the cerebrospinal system-the nerves; chemically it is quicksilver, an oily
                                or fatty substance, the argentum vivum or living philosophical
                                silver, for we learn that the true interpretation of quick is
                                living. 
                            </p>
                            <h2>
                                Origin
                            </h2>
                           
                            <p>
                                The root of the word Mercury is the Latin word <i>merx</i>, meaning goods or merchandise, 
                                In ancient times this god was identified as the Greek Hermes, son of Jupiter and Maia. 
                                The inventor of the lyre, god of oratory, conductor of the souls of the dead to the lower world, 
                                and patron (father) of merchants and thieves.
                            </p>
                            <div className='blog-img'>
                                <img src={mercury}  alt="Mercury at The Huntington Library, 2024"/>
                                <p className='stay-white'>
                                    Mercury at The Huntington Library, 2024
                                </p>
                            </div>
                            <p>
                                As messenger, Mercury (mind and the sensory nerves) utilizes the electrical energy of thought and the 
                                subtle nerve fluids created by Father Jupiter, the giver of all good things.
                                In action he may do this positively and hence beneficially, or negatively and destructively. In any case 
                                Mercury stands for merchandise, wares or goods, utilized in commerce or exchange 
                                by the mind in the body. As god of oratory he refers 
                                to the mental power necessary to become a good speaker, one who voices truth.
                            </p>
                            <p>
                                The words Mercury and mind are derived from the same root. 
                                Our minds must have goods with which and through which to express.
                            </p>
                            <h2>
                                Mercury's Pose
                            </h2>
                            <p>
                                Mercury, poised on winged feet on the lips of Gaia or Mother Earth, the right arm lifted and forefinger 
                                pointed directly overhead, is crowned with a winged hat. In the left hand and grasped by a handle extending 
                                from the middle pole or wand, is the caduceus, resting against the forearm and in
                                the hollow made by the elbow. A very short distance from the top of this wand are two wings. 
                                Twined around the pole with their bodies meeting and crossing at four points are two serpents, 
                                their heads turned inward and toward it.  
                            </p>
                           
                            <div className='blog-img'>
                                <img src={mercurytwo}  alt="Mercury at The Huntington Library, 2024"/>
                                <p className='stay-white'>
                                    Mercury at The Huntington Library, 2024
                                </p>
                            </div>
                            <p>
                                Caduceus means the Fall of Lightening. Study carefully the position in which the caduceus is held.
                                Ordinarily the natural way of holding a thing is outward or forward a little away from the body. 
                                The reader will note that the arm is forced backward and away from the body, instead, an unnatural 
                                and awkward position.
                                This was planned as a means of attracting one's attention to its relation to the back of Mercury, for 
                                the wand is the spine, 
                                and we hind this fact expressed in Hindu literature as the stick of Brahm. Brahmarandhra 
                                (Spirit or the Bee) enters the body through the Door of Brahm (suture in the skull) and leans on his stick. 
                            </p>
                            
                            <p>
                                The wings on the hat of Mercury represent the two hemispheres of the brain, our thinking cap. The two serpents are
                                symbolical of the right and left sympathetic systems, and correspond to the two thieves of the Bible story. For when life is lived negatively, they steal from us. 
                                The winged pole of Mercury is the Tree of Life.
                            </p>

                            <h2>
                                Gemini Ruled by Mercury
                            </h2>
                            <p>
                                I will cover Gemini in another post, but for now I will share this:
                                Air, Breathe, Oxygen, and Spirit energize and make active the mind for which
                                Mercury stands. Gemini is the branching-off month, and represents the branching-off
                                of the nerves from the head to form the body (allocated to the arms and lungs).  
        
                            </p>
                            <p>
                                Keeping in mind that Jupiter (Heavenly Father) is found in Mt. Olympus (Heaven), 
                                it only makes sense that Mercury would rule Gemini being the Messenger. 
                                The branch (pole) from which the brain communicates with the rest of the body. 
                                From which gold turns to quicksilver. Therefore, 
                                it only makes sense that Mercury rules Gemini, the twins. 
                            </p>


                            <h2>
                                Serpent Syncretism
                            </h2>
                            
                            <p>
                                The backbone is the support of the body, and there is much more to this statement than appears on the surface, for does not lack of character mean a weak back bone! 
                                In terms of Masonry it certainly does, in spite of the French pronunciation of the Pass-word. In Hebraic literature the back bone is the Rod of Moses. 
                                Thus we learn that the same story, the fall and rise of man, is universal among all nations and peoples.
                            </p>
                            <div className='blog-img'>
                                <img src={moses}  alt="Moses and The Bronze Serpent"/>
                                <p className='stay-white'>
                                    Moses and The Bronze Serpent
                                </p>
                            </div>
                            <div className='quote'>
                                <p>
                                    "The Lord said to Moses, make a bronze serpent and put it up on a pole, anyone who was bitten
                                    by a serpent can look up at it and live. And Moses made a serpent of brass and put it on a pole and it was so, if a serpent had bitten anyone when he looked at
                                    the bronze serpent he lived."
                                </p>
                                <p>
                                    - Numbers 21:8-9
                                </p>
                            </div>

                            <p>
                                Religion, so absolutely and entirely perverted down 
                                the ages, begins now to blossom forth as a and wondrous story, and we realize at last that each individual has
                                his own Tree of Life, 
                                his own Garden of Eden. No one but himself can destroy that tree. No one but himself can cultivate it or
                                supply it with nutriment, so that 
                                in time it may bear twelve kinds of perfect fruit (the twelve divisions of the body). This process means
                                THE OVER-COMING OF DEATH.
                            </p>
                            <p>

                            </p>
                           
                            <div className='quote'>
                                <p>
                                    "God sends serpents to torment the Isrealites and he commands Moses to make their salvation in the 
                                    image of their suffering. The cause and cure come from the same source"
                                </p>
                                <p>
                                    - Numbers 21:6
                                </p>
                            </div>
                            <h2>
                                Conclusion
                            </h2>
                            <p>
                                Mercury is the omnipresent spirit of life. It transends life and death (liquid and solid).
                            </p>
                            <p>
                                The winged pole of Mercury is the Tree of Life, while the serpents correspond to the Tree of Knowledge of Good and Evil. 
                                One is the sensory system, the other the motor, the latter planned to work in harmony with the former,
                                doing the work pertaining to motion. Perverted—it becomes E-MOTION, energy wasted, substance lost.
                            </p>
                            
                            <p>
                                The Caduceus is commonly used in Hopsitals and Medicine labels. 
                                However, how many physicians among them know of its immemorial metaphysical and physiological 
                                tradition? About as many as those having knowledge of the real interpretation of Freemasonry, of 
                                Astrology or Christianity.
                            </p>
                            <div className='quote'>
                                <p>
                                    "And as moses lifted up the Serpent in the wilderness, 
                                    So must the son of man be lifted up."
                                </p>
                                <p>
                                    - John 3:14
                                </p>
                            </div>

                            <h2>
                                Post-morteum thoughts:
                            </h2>
                            <p>
                                Notice how Mercury is pointing up? Lifting the cerebrospinal fluid (Mercury) up our spine, towards our head
                                causes illumination.
                                The Serpents are lifted to the higher mind and attain their wings. 
            
                            </p>
                            <p>
                                This symbol of the serpent (energy) lifted up around the pole (spine)
                                can be seen on the American Dollar Symbol ($). As Mercury is indeed
                                the god of merchants and thieves, it only makes sense that our currency
                                and health be represented with this divine symbol. 
                            </p>
            
                            <p>
                                Mercury, the Great Physician, can atleast fulfill his divine mission, 
                                which is to heal all diseases. The cerebro-spinal fluid is Mercury. 
                                Raise your Mercury, raise your serpents, and heal thyself. 
                            </p>
                            
                            <p>
                                Amen. 
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className='blog-link-container'>

<Link id='item-link' to="/blog/genesis">
    <motion.div
    initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
    animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
    transition={{ duration: 1 }}
    className="blog-prev-container">
        <div className='back-container'>
            <img className="arrow" src={backArrow}/>
            <p>
                Chapter I
            </p> 
        </div>
    </motion.div>
</Link>


<Link id='item-link' to="/blog/fullmetal">
    <motion.div
    initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
    animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
    transition={{ duration: 1 }}
    className="blog-next-container">
        <div className='back-container'>
            
            <p>
                Chapter III
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

export default Mercury;
