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
import shirt from '../assets/shirt-size.svg';
import CarouselSlide from '../carousels/CarouselSlide';
import arrow from '../assets/icons/arrow.svg'
import backArrow from '../assets/icons/arrow-back.svg'


function ItemOne() {

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
        <CarouselSlide/>
      </div>
      <div id="item-description" className='box'>
        <div className='item-description'>
          <p>
            HEART OF GOD TEE
          </p>
          <p>
            $45
          </p>
        </div>
        <div className='item-description'>
          <p>
              WHITE
          </p> 
        </div>
        <div id="size" className='item-description'>
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
      </div>
      <div id="details" className='item-description'>
        <div className='arrow-container' onClick={toggleDetails}>
          <p>
            DETAILS  
          </p>
          <motion.img
            animate={isDetailsVisible ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: .3}} 
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
              Oversized fee in midweight 6.5oz cotton jersey. Features screenprinted graphics. 
            </p>
            <p>
              - Shortsleeve
              <br/>
              - Ribbed Collar
              <br/>
              - Runs large
              <br/>
              - Unisex
              <br/>
              - Material: 100% cotton
              <br/>
              - Imported
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
                All measurements are taken across the garment while laid flat.
              </p>
              <div className='table-container'>
                <table class="styled-table">
                  <thead>
                    <tr>
                      <th><p>Size (in)</p></th>
                      <th><p>S</p></th>
                      <th><p>M</p></th>
                      <th><p>L</p></th>
                      <th><p>XL</p></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><p>CHEST</p></td>
                      <td><p>19.5</p></td>
                      <td><p>21.5</p></td>
                      <td><p>23.5</p></td>
                      <td><p>25.5</p></td>
                    </tr>
                    <tr>
                      <td><p>LENGTH</p></td>
                      <td><p>28</p></td>
                      <td><p>29</p></td>
                      <td><p>30</p></td>
                      <td><p>31</p></td>
                    </tr>
                    <tr>
                      <td><p>SLEEVE</p></td>
                      <td><p>9</p></td>
                      <td><p>9.5</p></td>
                      <td><p>10</p></td>
                      <td><p>10.5</p></td>
                    </tr>
                  </tbody>
                </table>
                <div className='shirt-size-container'>
                  <img id="shirt-size" src={shirt} alt="shirt measurements"/>
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

export default ItemOne;
