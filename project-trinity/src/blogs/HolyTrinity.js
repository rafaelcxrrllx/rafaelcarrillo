import '../styling/Genesis.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import backArrow from '../assets/icons/arrow-back.svg';
import rightArrow from '../assets/icons/arrow-right.svg';
import holytrinity from '../assets/holytrinity.jpg';
import mary from '../assets/father.jpg';
import god from '../assets/god.jpg';
import walkonwater from '../assets/walkonwater.jpg';
import aura from '../assets/aura.jpg';
import yinyang from '../assets/yinyang.jpg';
import redblue from '../assets/korea.jpg';

import ScrollToTop from '../components/ScrollToTop';


function HolyTrinity() {


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
                    <img className="arrow" alt="back arrow" src={backArrow}/>
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
            <img src={holytrinity}  alt="The Holy Trinity Knot"/>
        </motion.div> 
        <motion.div
        initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
        animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
        transition={{ duration: 1 }}
        className="blog-back-container">
            <div className='genesis-main-container'>
                <div className='title-container'>
                    <p className='stay-white'>
                        22 July, 2024
                    </p>
                    <h1 className='stay-white' id='title'>
                        The Holy Trinity
                    </h1>
                    
                </div>
                    <div className='genesis-container'>
                        <div className='blog-text-container'>
                        
                            <p>
                            <span className='start-letter'>
                                R
                            </span>
                            
                            edemption, the Great Work bestowed upon humanity. No matter what 
                            religion it is, they all share this ultimate goal. Only a few specially gifted 
                            people can rise superior to the influence of their professed creeds 
                            and find absolute unanimity in the truths propagated by all great faiths. 
                            There are no real discrepancies between the teachings of the East and West, much less 
                            any real conflict. 
                            </p>
                            <div className='quote'>
                                <p>
                                    "Speak to us and give us of your truth. 
                                    And we will give it unto our children, and they unto their children, and it shall not perish."
                                </p>
                                <p>
                                    - The Prophet by Khalil Gibran, 1923
                                </p>
                            </div>
                            <p>
                                <b>Taoism:</b> "Man consisting of a <i>trinity</i> of spirit, 
                                mind, and body, cometh forth from the Eternal, and after putting off desire re-enters the glory of Tao."
                                <br/>
                                <b>Buddhism:</b> "Man, fundamentally Divine, is held in the <i>three</i> worlds by desire. Purification 
                                from desire leads the man to Nirvana."
                                <br/>
                                <b>Christianity:</b> "Man made in the image of God-Body, Soul and Spirit-a <i>Trinity</i>."
                                <br/>
                                <b>Hinduism:</b> "The most well known Hindu <i>Trinity</i> is Brahma the Creator, Vishnu the Preserver, and Shiva as Judge."
                            </p>

                            <p>
                                The fundamental truths
                                of creation, evolution and involution of the world. 
                                These basic truths are one not easily comprehended, but not impossible. Entering a state 
                                of true illumination, saints and prophets have realized the Supreme Reality behind all names and forms. 
                               
                            </p>

                            <div className='quote'>
                                <p>
                                    "Placing the holy scriptures on the spotless table of his mind, he is able 
                                    to dissect them with the scalpel of intuitive reasoning, and to separate 
                                    interpolations and wrong interpretations of scholars from the truths as originally given 
                                    by the prophets."
                                </p>
                                <p>
                                    - Paramhansa Yogananda, 1949
                                </p>
                            </div>

                        

                      
                 
                           
                            <h2>
                                The Father (El)
                            </h2>
                            
                            <p>
                                The Eternal Father God is the only real substance in the universe, and is all in all in the universe. 
                                The Father cannot be comprehended by man of this material world, unless he lifts the son of man from Darkness.
                                The Nature of the Eternal Father is Almighty Force (Repulsion). 
                                The manifestation of this Almighty Force produces a vibration, a particular sound, the Word <i>Aum</i> (Amen). 
                                This is the Word Made Flesh. This manifestation the Word, becoming Flesh the external material, created this visible world. 
                            </p>

                           
                           
                            <p>
                                The Dielectric Field or "counter-space" is pure energy and potential, Ether. 
                                Dielectricity, The Eternal Father, is energy or Ether at rest. Silent, and still. Dielectricity is the 
                                "eraser of space". Everything that is visible came from 
                                the invisible, the Ether, Dielectricity, and must go back to it. 
                                The Eternal Father is the pure intelligence that underlies space and manifests as "space". 
                            </p>
                            <div className='blog-img'>
                                <img src={god}  alt="Note to Self"/>
                                <p className='stay-white'>
                                    The Creation of Adam, Michelangelo (1512)
                                </p>
                            </div>
                            <p> 
                                <b>
                                Source - Dielectricity - Black Light - Invisible - Absence of Color - Soul - Time - God - Father - Omnipotent - The Creator
                                -
                                Masculine - Stillness - Acceleration - Order - Christ - Sulfur - Black Sun - Neutral - Energy - 3
                                </b>
                            </p>


                            <h2>
                                The Holy Spirit (La)
                            </h2>
                            <p>

                            </p>
                           
                            <p>
                                The manifestation of Omniscient Love is Life, the Omnipresent Holy Spirit or Ghost. 
                                The Holy Ghost shines on Darkness to attract every portion of it towards Divinity. Universal Love, the Holy Spirit becomes spiritualized like iron-fillings 
                                in magnetic aura. The power of feeling, Heart, becomes magnetized and gets polarized; one which attracts it towards the Real Substance, the Eternal Father.  
                                
                                This Holy Ghost being the manifestation 
                                of the Omniscient Nature of the Eternal Father God is no other substance than God himself. 

                               
                                
                            </p>

                            <p>
                                The action of Repulsion the manifestion of the Omnipotent Energy being thus completed, the action of Attraction (the 
                                manifestation of Omniscient Love in the core of the heart) begins to be manifested and Ignorance begins to be withdrawn. 
                                The Heart, like an onion begins to unveil different layers of its existence. Like a lotus flower opening its petals, catching the dew drops of light, attracting atoms of higher nature, 
                                until there is no longer anything to keep man in bondage to this creation of Darkness <i>Maya</i>. 
                                He becomes free, and enters into the creation of Light. Under the influence of The Holy Spirit, the atoms 
                                being attracted towards one another come nearer and nearer, taking Ethereal, Gaseous, Fiery, Liquid, and Solid Forms. 
                            </p>
                            <p>
                                The Magnetic Field or "space" is the manifestation of energy and potential, Magnetism. 
                                Magnetism is energy at motion, 
                                maintaining its volume through dimensional force. Magnetism is the "creator of space". 
                                Everything with mass and magnitude in the universe is sustained by Magnetism.
                                Magnetism provides the space we use. 
                                All physicality is sustained by Magnetism, Ether in motion.
                            </p>
                            <div className='blog-img'>
                                <img src={mary}  alt="Note to Self"/>
                                <p className='stay-white'>
                                    The Immaculate Conception of Mary
                                </p>
                            </div>
                            <p>
                            <b>
                                Dimensional Force - Magnetism - White Light - Invisible - All Color - Spirit - Space - Mary - Mother -  Omniscient

                               - Feminine - Motion - Force - Chaos - Virgin - Mercury - Moon - Positive - Frequency - 6
                            </b>
                            </p>

                            <h2>
                                The Son (El / la)
                            </h2>
                            <p>
                                Atoms hold the reflections of Spiritual Rays from God, 
                                called the Sons of God. These atoms, magnetized by two poles, attract towards The Eternal Father, and 
                                repel from it.  
                            </p>
                            <p>
                                Darkness <i>Maya </i> 
                                or its individual parts, Ignorance, is repulsion itself. It cannot comprehend the Spiritual Light but reflects it. 
                                
                                Individually, the atoms are known as <i>Ignorance</i>, 
                                as it makes man ignorant of his own self. <i>Maya</i> is but development of play on ideas composed by Ignorance and has no 
                                substantial existance in reality. Temporary, an illusion. 
                            </p>
                            <p>
                                When all developments of Ignorance are withdrawn, the Heart being perfectly clear and purified no longer reflects the Spiritual Light but 
                                recieves and manifests it, thus being consecrated and anointed becomes Christ. When man, thus entering into the spiritual world, 
                                becomes a Son of God, he comprehends the universal light - The Holy Ghost - as a perfect whole, and his self as nothing but a mere idea resting on a 
                                fragment of the Eternal Father's <i>Aum</i>. 
                            </p>

                            <p> To abandon the vain idea of separate existence, to be one with the Holy Ghost, the Fire, to be unified 
                                with the Eternal Father, is when the son of man is baptized by the stream of consciousness 
                                and becomes the son of god. 
                            </p>

                            

                            <div className='quote'>
                                <p>
                                    "Verily, verily, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God."
                                </p>
                                <p>
                                    - John 3:5
                                </p>
                            </div>
                            <br/>
                           
                            <p>
                                The inner-volume of every Atom (Adam) is 
                                Magneto-Dielectricity, the two symbiotic forces of the universe. 
                                When these two forces are joined together in harmony, 
                                they create the Atom, or electricity. The make up of this atom is The Torus & The Hyperbola.
                                The Hyperboloid is a double sink, hourglass shape that sits perfectly inside of the Toroidal. 
                                The Toroidal radiates out from the center up and around 
                                creating a donut shape as it returns back to the center. 
                            </p>
                            
                            <div className='blog-img'>
                                <img src={aura}  alt="Note to Self"/>
                                <p className='stay-white'>
                                The Hyperbola (The Bull) and Torus Field (El Toro)
                                </p>
                            </div>
                            <p>
                                These diverging and converging fields of pure energy and the loss of pure energy create all things in the universe. 
                                The Bull and El Toro, how I like to call it. For a very good reason to. Because as you innerstand this information, 
                                you begin to see everything in the world is just Toros and Bulls. Right-turning, Left-turning, Red, Blue, Wrong, Right, Up, Down. This polarity is 
                                the temporal construct of interference in the Ether. 
                            </p>
                           
                            <p>
                                The roots of our languages, were based on these truths. Many words contain variations of the vibrations <i>bol, lob, tor </i> 
                                and, <i>rot</i>. 
                            </p>
                            <p>
                                It is super important to remember the following statements:
                            </p>
                            <p>
                                The Torus Field is Space, Red, Rotating, Divergent, and Centrifugal
                            </p>
                            <p>
                                The Hyperbola Hourglass is Time, Blue, Thrusting, Convergent, and Centripetal
                            </p>
                            <div className='blog-img'>
                                <img src={redblue}  alt="Note to Self"/>
                                <p className='stay-white'>
                                    Redshift - Blueshift
                                </p>
                            </div>

                            <p>
                                This is super important to understand. It is a red-shift, blue-shift world. The Toro and The Bull. Maybe this 
                                will bring some understandment to the phrase, "Holy Cow". Truly this is the Holiest of Cows. 
                            </p>

                            <p>
                                The Yin & Yang (Dielectricity & Magnetism), constitutes all that there is in this universe. 
                           </p>
                           <div className='blog-img'>
                                <img src={yinyang}  alt="Note to Self"/>
                                <p className='stay-white'>
                                    Yin Yang
                                </p>
                            </div>
                           <p>
                                Dielectricity and Magnetism give birth to Electricity, red-shift, blue-shift. 
                                The two polar forces of the material world. 
                            </p>
                            

                            
                            <div className='blog-img'>
                                <img src={walkonwater}  alt="Note to Self"/>
                                <p className='stay-white'>
                                    Jesus and Peter on Water by Gustave Brion (1863)
                                </p>
                            </div>
                            
                            <p>
                                Electricity - Red & Blue Light - Visible - Seven Colors - Mind/Body - Wave - Jesus - Son 
                                
                                - Masculine/Feminine - Rest Against Motion - Temporal - Finite - Changing - Dividing - Life - Salt - Earth - Positive & Negative - Vibration - 9
                            </p>

                            <h2>
                                Conclusion
                            </h2>
                            <p>
                                This constitutes <i>The Holy Trinity</i>. 
                                Dielectricity is the Father, Electricity is the Son, and Magnetism is the Holy Spirit. 
                                <i> The Holy Trinity</i> is the product of the two symbiotic forces in the Universe. 
                                The infinite fractals of this triplicity can be found throughout all of history, and in what 
                                is to come. To be unified with the Eternal Father for ever is the ultimate goal. And this 
                                is only possible through and with love. God is love, the power of love, the power of god, is our eternal truth. 
                                Life is unstable and unsafe, but love is our anchor that gives us our equilibrium. Would it be that the Heart Chakra is our 
                                equilibrium, hence why it is our middle chakra? Hence why Jesus the Son of God points to his Heart? Food for thought, and a quench for the mind.  
                            </p>

                            <div className='quote'>
                                <p>
                                    "Brief were my days among you, and briefer still the words I have spoken. 
                                    But should my voice fade in your ears, and my love vanish in your memory, then I will come again."
                                </p>
                                <p>
                                    - The Prophet by Khalil Gibran, 1923
                                </p>
                            </div>

                            <h2>
                                Post-morteum thoughts:

                            </h2>

                            <p>
                                My seventh entry, the perfect entry, the entry where I finally talk about  <i>Trinity</i>. Fun fact, I did not name myself after the character from 'The Matrix', even though it fits perfectly with its embodiment. 
                                I fell in love with the idea of <i>Trinity</i> being this other self that was connected to me, the same way my reflection is always attached to me, even when I am not in front of a mirror. 
                               
                            </p>
                           
                            <p>
                                Funny enough, <i> The Holy Trinity</i>, or  <i>Trinity</i>, is truly a companion in all of our lives. 
                                Calling forth Neo to wake up. Constantly knocking at our door. Waiting for us to answer. 
                                
                            </p>
                            <p>
                                The true meaning of Marriage is the union of Spirit and Matter. 
                                When one accepts the Spiritual Love and Light, and creates a relationship with it. We must all have a marriage with our Spirit, before we can have relationships with others. 
                                We all have a dark-side, literally. So join hands, 
                                and know that love is the answer. 
                            </p>
                            <div className='quote'>
                                <p>
                                    "Love rules the court, the camp, the grove, and men below, and the saints above, for love is heaven, and heaven is love."
                                </p>
                                <p>
                                    - Sir Walter Scott
                                </p>
                            </div>
                            <p>
                                Loved Not Owned. 
                            </p>
                           
                                    
                            <p>
                            Amen.
                            </p>
                        </div>
                        
                    </div>
            </div>
            
        </motion.div>
    <div className='blog-link-container'>

    <Link id='item-link' to="/blog/theantichrist">
            <motion.div
            initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
            transition={{ duration: 1 }}
            className="blog-prev-container">
                <div className='back-container'>
                    <img alt="back arrow" className="arrow" src={backArrow}/>
                    <p>
                        Chapter VI
                    </p> 
                </div>
            </motion.div>
        </Link>
        
        
        <Link id='item-link' to="/blog/genesis">
            <motion.div
            initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
            transition={{ duration: 1 }}
            className="blog-next-container">
                <div className='back-container'>
                    
                    <p>
                        Chapter I
                    </p> 
                    <img alt="right arrow" className="arrow" src={rightArrow}/>
                </div>
            </motion.div>
        </Link>
    </div>

    <Footer/>
    </div>
  );
}

export default HolyTrinity;
