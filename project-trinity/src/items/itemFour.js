// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Item.css'

// Components
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import phone from '../assets/emf-model.png';
import CarouselEMF from '../carousels/CarouselEMF';
import arrow from '../assets/icons/arrow.svg'
import backArrow from '../assets/icons/arrow-back.svg'


function ItemFour() {

  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  const [isShipVisible, setIsShipVisible] = useState(false);

  const toggleShip = () => {
    setIsShipVisible(!isShipVisible);
  };

  const [isSizeVisible, setIsSizeVisible] = useState(false);

  const toggleSize = () => {
    setIsSizeVisible(!isSizeVisible);
  };

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div>
    <Nav/>
    <Link id='item-link' to="/shop">
      <motion.div
      initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
      animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
      transition={{ duration: 1 }}
      className='shop-back-container'>

        {/* <div className='back-container'>
          <img className="arrow" src={backArrow}/>
            <p>
              Back to Shop
            </p> 
        </div> */}
      </motion.div>
    </Link>
    <motion.div 
    initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
    animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
    transition={{ duration: 1 }}
    class="container">
      <div className='box'>
        <CarouselEMF/>
      </div>
      <div id="item-description" className='box'>
        <div className='item-description'>
          <p>
            EMF BLKR
          </p>
          <p>
            $20
          </p>
        </div>
        {/* <div className='item-description'>
          <p>
              ANY COLOR, ANY DECAL
          </p> 
        </div> */}
        {/* <div id="size" className='item-description'>
        <p
        className={`size ${selectedSize === 'S' ? 'selected' : ''}`}
        onClick={() => handleSizeClick('S')}>
          S
        </p>
        <p
        className={`size ${selectedSize === 'M' ? 'selected' : ''}`}
        onClick={() => handleSizeClick('M')}>
          M
        </p>
        <p
        className={`size ${selectedSize === 'L' ? 'selected' : ''}`}
        onClick={() => handleSizeClick('L')}>
          L
        </p>
        <p
        className={`size ${selectedSize === 'XL' ? 'selected' : ''}`}
        onClick={() => handleSizeClick('XL')}>
          XL
        </p>
      </div> */}
      <div id="details" className='item-description'>
        <div className='arrow-container' onClick={toggleDetails}>
          <p>
            DETAILS  
          </p>
          <motion.img
            animate={isDetailsVisible ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: .3 }} 
            className="arrow" src={arrow}/>
        </div>
        
        {isDetailsVisible && (
          <motion.div
          className="menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}>
            <p>
            Protect yourself and your loved ones from 
            harmful electromagnetic fields (EMF) with our 
            EMF BLKR. Designed for maximum efficiency, 
            this device shields you from the EMF radiation emitted
             by electronic devices such as:
            </p>
            <p>
              - Smartphones
              <br/>
              - Laptops
              <br/>
              - Tablets
              <br/>
              - Wi-Fi routers
              <br/>
              - Other household electronics
              <br/>
              - Imported
            </p>

            <p>
              Programmed with 30+ Homeopathic Frequencies including 
              Shungite & Crystals proven to Neutralize EMF.
            </p>
            
            <p>
            <b>Legal Disclaimer:</b> Statements regarding dietary supplements have not been 
            evaluated by the FDA and are not intended to diagnose, 
            treat, cure, or prevent any disease or health condition.
            </p>
          </motion.div>
        )}
        </div>
        <div id="details" className='item-description'>
          <div className='arrow-container' onClick={toggleSize}>
            <p>
              SIZE GUIDE
            </p>
            <motion.img
            animate={isSizeVisible ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: .3 }} 
            className="arrow" src={arrow}/>
          </div>
            
          {isSizeVisible && (
            <motion.div
            className="menu"
            id="shirt-sizes"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}>
              <p>
                1 inch x 1 inch
              </p>
              <p>
                All measurements are taken across the iPhone 15 Pro while laid flat.
              </p>
              <div className='table-container'>
                
                <div className='shirt-size-container'>
                  <img id="shirt-size" src={phone} alt="shirt measurements"/>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <div id="details" className='item-description'>
          <div className='arrow-container' onClick={toggleShip}>
            <p>
              SHIPPING & RETURNS
            </p>
            <motion.img
            animate={isShipVisible ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: .3 }} 
            className="arrow" src={arrow}/>
          </div>
          
          {isShipVisible && (
            <motion.div
            className="menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}>
              <p>
              Standard $7 (3-7 business days)
              </p>
              <p>
              Returns can be made within seven days of delivery. Exclusions apply. See our return guidelines for more details.
              </p>
            </motion.div>
          )}
        </div>

        <div className='buttons'>
          <button id="AddToBag" class="btn">
            UNAVAILABLE
          </button>
        </div>
      </div>
    </motion.div>
    <Footer/>      
    </div>
  );
};

export default ItemFour;
