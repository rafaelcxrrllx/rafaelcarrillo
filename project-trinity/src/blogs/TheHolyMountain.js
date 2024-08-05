import '../styling/Genesis.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import backArrow from '../assets/icons/arrow-back.svg'
import animalMan from '../assets/animalman.jpeg'
import theFool from '../assets/theFool.jpg'
import selfOne from '../assets/selfOne.jpg'
import theLostBoys from '../assets/theLostBoys.jpg'
import selfTwo from '../assets/selfTwo.jpg'
import womanNChimp from '../assets/womanNChimp.jpg'
import christRelease from '../assets/christRelease.jpg'
import goatMan from '../assets/goatMan.jpg'
import tower from '../assets/tower.jpg'
import insideTower from '../assets/insideTower.jpg'
import hippo from '../assets/hippo.jpg'
import alchemy from '../assets/alchemy.jpg'
import gold from '../assets/gold.jpg'
import thirdEye from '../assets/thirdEye.jpg'
import solarPlexus from '../assets/solarPlexus.jpeg'
import throatChakra from '../assets/throatChakra.jpg'
import holymountain from '../assets/holymountain.jpg'
import rightArrow from '../assets/icons/arrow-right.svg'
import ScrollToTop from '../components/ScrollToTop';

function TheHolyMountain() {


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
            <img src={holymountain}  alt="Images from The Holy Mountain (1973)"/>
        </motion.div> 
        <motion.div
        initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
        animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
        transition={{ duration: 1 }}
        className="blog-back-container">
            <div className='genesis-main-container'>
                <div className='title-container'>
                    <p className='stay-white'>
                        20 June, 2024
                    </p>
                    <h1 className='stay-white' id='title'>
                    The Holy Mountain
                    </h1>
                    
                </div>
                    <div className='genesis-container'>
                        <div className='blog-text-container'>
                        
                            <p>
                            <span className='start-letter'>
                                I
                            </span>
                            
                            could not resist seeing this movie the moment I came across
                            its movie poster. The Holy Mountain (La Montaña Sagrada)
                            is a surreal film written and directed by
                            Alejandro Jodorowsky from 1973. In a corrupt, greed-fueled world, 
                            a powerful alchemist leads a messianic character 
                            and seven materialistic figures to the Holy Mountain, 
                            where they hope to achieve enlightenment. 
                            </p>
                            
                          
                            <p>
                                This article containers spoilers from the movie The Holy Mountian. 
                                Please avoid this article if you do not wish to see any spoilers!
                            </p>
                            <h2>
                                StoryLine
                            </h2>
                           
                            <p>
                                A Christlike figure wanders through bizarre, grotesque 
                                scenarios filled with religious and sacrilegious imagery.
                                 He meets a mystical guide who introduces him to seven wealthy 
                                 and powerful people, each representing a planet in the Solar 
                                 system. These seven, along with the protagonist, the guide 
                                 and the guide's assistant, divest themselves of their worldly
                                  goods and form a group of nine who will seek the Holy Mountain, 
                                  in order to displace the gods who live there and become immortal.
                            </p>

                            <p>
                                I suggest seeing the movie first and then coming here after giving it 
                                your own thought! Trigger warning to those who do not do well with extreme measures of expression. 
                                You can find it here: 
                            </p>
                            <p>
                            <a href='https://www.dailymotion.com/video/x8p1q80'>The Holy Mountain (1973)</a> by Alejandro Jodorowsky
                            </p>
                            
                           
                            <h2>
                                The Protagonist
                            </h2>
                            <div className='blog-img'>
                                <img src={animalMan}  alt="The Protagonist, The Holy Mountainl"/>
                                <p className='stay-white'>
                                    The Protagonist, The Holy Mountain
                                </p>
                            </div>
    

                            <p>
                                The Protagonist is the lower-self, the animal nature, the son
                                of man. He never speaks a word, and is easily influenced. In the film
                                he is a representation of Jesus and I would agree, 
                                however not a representation of Jesus Christ (yet).
                            </p>

                            <div className='blog-img'>
                                <img src={theFool}  alt="The Fool, The Holy Mountain"/>
                                <p className='stay-white'>
                                    The Fool, The Holy Mountain
                                </p>
                            </div>
                         
                          
                            <p>
                               In the beginning of the film, 
                               The Fool Tarot Card is shown, 
                               signifying the embrace of a new Beginning
                               only someone who is naive and hopeful can embark on. 
                            </p>

                            <h2>
                                The Lost Boys
                            </h2>

                            <div className='blog-img'>
                                <img src={theLostBoys}  alt="The Lost Boys, The Holy Mountain"/>
                                <p className='stay-white'>
                                    The Lost Boys, The Holy Mountain
                                </p>
                            </div>
                         
                          
                            <p>
                               There is a pack of boys in the film who placed
                               The Protagonist on a cross and began to stone 
                               him before he gained consciousness in the beginning of the film.
                               They come in and out of the two caves seen in the image above. 
                               These represent the 'Lost Boys', the procreative germs. When the
                               corpuscles of the body fall under the vibration of the lower mind, they are attracted
                               down to the testes, hence animal germs, termed negative in nature. 
                               The two caves in the mountain give shape to the Pubic Symphysis, 
                            </p>
                            <p>
                                One can state that in both esoteric and biological astrology, 
                                this is the negative energy of Scorpio, 
                                the Scorpion. The Lost Boys stoning The Protagonist on the cross 
                                symbolizes how the lower mind can kill the son of man, 
                                the psycho—physical seed, Jesus. 
                            </p>

                            <h2>
                                The Self
                            </h2>
                            <div className='blog-img'>
                                <img src={selfOne}  alt="Christ-like Figures, The Holy Mountain"/>
                                <p className='stay-white'>
                                    Christ-like Figures, The Holy Mountain
                                </p>
                            </div>

                            <p>
                                In this scene, our Protagonist is given liquor
                                by obese Roman Soldiers and a gross Virgin-like figure
                                who is actually a drunken man as well. He blacks out
                                and during his time unconscious, his body is molded
                                and used to create dozens of christ-like figures. He wakes
                                up and sees what was done. 
                            </p>
                            <div className='blog-img'>
                                <img src={selfTwo}  alt="Christ-like Figures (Destroyed), The Holy Mountain"/>
                                <p className='stay-white'>
                                    Christ-like Figures (Destroyed), The Holy Mountain
                                </p>
                            </div>

                            <p>
                                Screaming in rage, he destroys all but one figure of his self. 
                                He decides to take his last self, and leave. 
                            </p>
                            <p>
                                This scene left me speechless. I could feel the hate and anger from 
                                The Protagonist. His body being used for capital, being drunken and 
                                taken advantage of. The only one who was destroyed was his many selves. 
                                The many selves who, over and over again, died and perished at the hands
                                of evil. Taking the very last of his self. 
                            </p>

                            <h2>
                                The Woman and The Chimp
                            </h2>
                            <div className='blog-img'>
                                <img src={womanNChimp}  alt="The Woman and The Protagonist, The Holy Mountain"/>
                                <p className='stay-white'>
                                    The Woman and The Protagonist, The Holy Mountain
                                </p>
                            </div>
                            <p>
                                Throughout the movie, this woman and chimp 
                                being to follow our Protagonist. 
                                The rest of the women followed as well, 
                                however get distracted
                                by festivities and cease to follow. 
                            </p>
                            <p>
                                I think she is worth mentioning, as she is 
                                the representation of Mary Magdelene. 
                            </p>

                            <h2>
                                The Release of Self
                            </h2>
                            <div className='blog-img'>
                                <img src={christRelease}  alt="Release of Self Image,  The Holy Mountain"/>
                                <p className='stay-white'>
                                    Release of Self Image,  The Holy Mountain
                                </p>
                            </div>
                            <p>
                                The Protagonist ties up his self figure to red and blue
                                balloons, and release him into the sky. 
                                Interesting choice of colors for the balloons, 
                                representing the red and blue shift, the lower and higher self.
                                Union of both leads to the elevation of man. Raising his self, 
                                releasing his self. Letting go is the first step towards enlightment. 
                            </p>

                            <h2>
                                The Tower
                            </h2>
                            <div className='blog-img'>
                                <img src={tower}  alt="The Tower,  The Holy Mountain"/>
                                <p className='stay-white'>
                                    The Tower,  The Holy Mountain
                                </p>
                            </div>
                            <p>
                                After releasing his self, The Protagonist comes across this tower
                                in the middle of town. It began to descend a hook from a hole located
                                at the top of the tower. 
                            </p>

                            <div className='blog-img'>
                                <img src={gold}  alt="Gold from the Tower,  The Holy Mountain"/>
                                <p className='stay-white'>
                                    Gold from the Tower,  The Holy Mountain
                                </p>
                            </div>
                            <p>
                                The hook which descended had a bag filled with gold. The
                                 commoners put grapes, bread, and fish on the hook to return to the top, 
                                 but our protagonist grabs a dagger and jumps on top of the hook, heading
                                 to the top. 
                            </p>

                           
                            <p>
                                A couple things to point out. First, the bag has the alchemical symbol 
                                of the Sun.
                                Secondly, the tower which sends down a hook filled with gold has a huge
                                esoteric meaning. The hook can be interpreted as the coccyx, which is 
                                the base of the spine. The tower, representing the spine, sends down gold
                                from the top to the sacrum, to feed all of the poor. Again, this should be 
                                intepreted as biochemical esoterism, as it is a representation of tithing. 
                                
                            </p>
                            <p>
                                Tithing is the practice of taking or paying a tithe.
                                A tithe is one tenth of annual produce or earnings, that is taken
                                to support the Church. 
                            </p>
                            <p>
                                Here is where the deprogramming begins: 
                            </p>
                            <p>
                                Tithing is done within the body when the higher mind gives one tenth of itself to feed 
                                the lower mind. The lower mind, 
                                represented as the commoners, are the dying corpuscles found in the body. 
                                Take note that this corrupted and dying society sends back grapes, fish, and bread specifically 
                                for a reason. The bread (fish) and the wine must be recieved at the top in exchange for the 
                                tenth of gold. However, this is not the correct bread and wine that must be sent to the upper chamber.
                            </p>
                            <p>
                                To truly give and not steal from God (Malachi 3:8) you must return 
                                the bread (jesus) and wine (blood) to him in the higher mind. 
                            </p>
                            <p>
                                A person who dwells in the lower mind will say that tithing must be 
                                practiced with the State and Church, which steals your fruits of labor
                                to run a crooked system. The only tithing you owe is to your self, 
                                your higher mind. The only thief of gold from the higher mind is you. 
                            </p>
                            <div className='quote'>
                                <p>
                                “Will a mere mortal rob God? Yet you rob me.

                                “But you ask, ‘How are we robbing you?’

                                “In tithes and offerings.


                                </p>
                                <p>
                                    - Malachi 3:8
                                </p>
                            </div>
                            <h2>
                                Inside The Tower
                            </h2>
                            <div className='blog-img'>
                                <img src={insideTower}  alt="Inside The Tower,  The Holy Mountain"/>
                                <p className='stay-white'>
                                    Inside The Tower,  The Holy Mountain
                                </p>
                            </div>
                            <p>
                                The Protagonist walks inside the Tower, going 
                                from the left side to the right side (side-camera view). 
                                The walls, colored like a rainbow, goes from red to blue until he reaches
                                the altar at the end of the hall. 
                            </p>
                            <p>
                                A very surreal representation of the carnal mind crossing over to the 
                                divine mind. The rainbow is always related to the seven chakras, 
                                going from red to blue, leaving the lower mind, and entering god's mind. 
                            </p>
                            <h2>
                                The Goat Man
                            </h2>
                            <div className='blog-img'>
                                <img src={goatMan}  alt="The Goat Man,  The Holy Mountain"/>
                                <p className='stay-white'>
                                    The Goat Man,  The Holy Mountain
                                </p>
                            </div>
                            <p>
                                Here we can see two towers, a black and a white one, 
                                representing Heaven and Earth, Spirit and Matter. This can be supported 
                                with the dashes on the towers. See Korean Flag dashes
                                for reference. 
                            </p>
                            <p>
                                The woman marked with hebrew and sacred geometry to me 
                                is The Divine Mother, similar to Trinity in The Matrix. 
                                I have no idea what the camel represents, I will update this section,
                                when that truth and I find eachother. 
                            </p>
                            <h2>
                                The Baptism
                            </h2>
                            <div className='blog-img'>
                                <img src={hippo}  alt="The Crystal Palace,  The Holy Mountain"/>
                                <p className='stay-white'>
                                    The Crystal Palace,  The Holy Mountain
                                </p>
                            </div>
                            <p>
                               After dueling with The Goat Man and submitting,
                               The Goat Man begins to wash The Protagonist's Body in a fountain, beginning 
                               with his head, to his feet. There is also a hippo in the fountain. 
                            </p>
                            <p>
                                A beautiful baptism nonetheless, starting with the head which is where 
                                the fountain of youth is. The hippo, representing the hippocampus, an 
                                appropriate animal in The Crystal Palace (The Higher Mind). The sea of thought of man
                                is now pure, cleansed, and made anew.
                            </p>
                            <p>
                                The woman has a caduceus mark on her back, refer to Mercury: The Messenger of the Gods
                                for information on it. 
                            </p>
                            <h2>
                                The Great Work
                            </h2>
                            <div className='blog-img'>
                                <img src={alchemy}  alt="The Great Work,  The Holy Mountain"/>
                                <p className='stay-white'>
                                    The Great Work,  The Holy Mountain
                                </p>
                            </div>
                            <p>
                               Now that The Protagonist has been cleansed, 
                               he is taken to a different room, and placed inside 
                               of a glass. After an excruciating process, The Protagonist
                               is able to turn his bodily fluids into Sulpher and Mercury, 
                               resulting in the transmutation of his own feces into gold.  
                            </p>
                            <p>
                                The title of this subsection is self-explanatory. This is truly
                                a representation of the Great Work the Alchemist must perform
                                in order to attain Gold. Refer to FullMetal: The Law of Equivalent 
                                Exchange for more information on The Birth of the Philosopher Stone. 
                                Notice here there is a Pelican, and the Goat Man dressed in all white. 
                                I would be safe to assume this is the white pheonix of sacrifice and rebirth. 
                            </p>

                            <h2>
                                The Spinning Room
                            </h2>
                            <div className='blog-img'>
                                <img src={throatChakra}  alt="The Spinning Room,  The Holy Mountain"/>
                                <p className='stay-white'>
                                    The Spinning Room,  The Holy Mountain
                                </p>
                            </div>
                            <p>
                               After the Great Work is done, the Goat Man takes The Protagonist 
                               to a spinning room, filled with esoteric art, and mannequins. The 
                               two of them walk clockwise around the symbol that appears on the floor. 
                            </p>
                            <div className='blog-img'>
                                <img src={thirdEye}  alt="Third Eye Chakra,  The Holy Mountain"/>
                                <p className='stay-white'>
                                    Third Eye Chakra,  The Holy Mountain
                                </p>
                            </div>
                            <p>
                               Notice the symbol for the Third Eye Chakra closely relates 
                               to the middle symbol inside of the Spinning Room. However, 
                               the two identical symbols on the outskirts of the symbol from the 
                               Spinning room come from 
                               The Solar Plexus Chakra
                            </p>
                            <div className='blog-img'>
                                <img src={solarPlexus}  alt="Solar Plexus Chakra,  The Holy Mountain"/>
                                <p className='stay-white'>
                                    Solar Plexus Chakra,  The Holy Mountain
                                </p>
                            </div>
                            <p>
                                The Solar Plexus and The Third Eye. A very interesting combination 
                                of Chakras. I will dive into Chakras in another blog, but for now 
                                I do wish to point out one thing. The Solar Plexus represents Earth, 
                                the Barren Manger, where the Father fructifies the Divine Child. 
                                The Third Eye, allows us to see the interconnectedness of the universe. 
                                Being all one, coming from all one, one can see the truth. Interesting 
                                how the Third Eye Chakra places a critical role in seeing the Truth, 
                                as The Spinning Room spins, allowing The Protagonist to 'see' the esoteric art. 
                            </p>
                            <h2>
                                Conclusion
                            </h2>
                            <p>
                                This is not the end of the story, but I wish not to go further. Maybe I will create 
                                a part two, but there is so much to unpack, that I cannot spend more time on the matter. If you
                                have read this far, and are pure of heart, you will know what the remaining film represents. There 
                                are some very unique factors there, but we will save it for another day.
                            </p>
                            <div className='quote'>
                                <p>
                                “You want to know the secret, but man cannot achieve nothing by himself.“
                                </p>
                                <p>
                                    - The Goat Man (The Holy Mountain)
                                </p>
                            </div>
                          
                           


                            <h2>
                                Post-morteum thoughts:
                            </h2>
                            <p>
                                One of the best movies I have seen. I watched it a second time to complete this blog entry. It truly 
                                is a beautiful and frightful depiction of what is going on inside of our bodies, our society, and 
                                our universe. 
                            </p>
                           
                            <p>
                                Amen. 
                            </p>
                        </div>
                    </div>
            </div>
        </motion.div>

        <div className='blog-link-container'>

    <Link id='item-link' to="/blog/fullmetal">
            <motion.div
            initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
            transition={{ duration: 1 }}
            className="blog-prev-container">
                <div className='back-container'>
                    <img className="arrow" src={backArrow}/>
                    <p>
                        Chapter III
                    </p> 
                </div>
            </motion.div>
        </Link>
        
        
        <Link id='item-link' to="/blog/cellsaltsintro">
            <motion.div
            initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
            transition={{ duration: 1 }}
            className="blog-next-container">
                <div className='back-container'>
                    
                    <p>
                        Chapter V
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

export default TheHolyMountain;
