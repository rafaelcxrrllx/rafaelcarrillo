// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Shop.css'

// Components
import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {motion} from 'framer-motion'

// Assets
import HEARTOFGODFRONT from '../assets/items/heartofgod-front.svg'
import HEARTOFGODBACK from '../assets/items/heartofgod-back.svg'

import LOVELYBONESFRONT from '../assets/items/lovelybones-front.svg'
import LOVELYBONESBACK from '../assets/items/lovelybones-back.svg'

import TRINITYFRONT from '../assets/items/trinity-front.svg'
import TRINITYBACK from '../assets/items/trinity-back.svg'

import GOLDENFRONT from '../assets/items/staygolden-front.svg'
import GOLDENBACK from '../assets/items/staygolden-back.svg'

import ENERGYFRONT from '../assets/items/energy-front.svg'
import ENERGYBACK from '../assets/items/energy-back.svg'

import EMBLEMFRONT from '../assets/items/emblem-front.svg'
import EMBLEMBACK from '../assets/items/emblem-back.svg'

import EMFONE from '../assets/items/emf-one.png'
import EMFTWO from '../assets/items/emf-two.png'


import stars from '../assets/stars.svg'
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';


function Shop() {

  const [HOGSRC, setHogSrc] = useState(HEARTOFGODFRONT);
  const [LBSRC, setLBSrc] = useState(LOVELYBONESFRONT);
  const [TRISRC, setTRISrc] = useState(TRINITYFRONT);
  const [GLDSRC, setGLDSrc] = useState(GOLDENFRONT);
  const [ENGSRC, setENGSrc] = useState(ENERGYFRONT);
  const [EMSRC, setEMSrc] = useState(EMBLEMFRONT);
  const [EMFSRC, setEMFSrc] = useState(EMFONE);



  return (

    <div className='home-container'>
            

    <Nav/>
    <motion.div
    initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
    animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
    transition={{ duration: 1 }}>
    {/* <p className='title'>
      Shop
    </p> */}
    <div className='items'>
    <Link id='item-link' to="/shop/emfblkr">
          <div className='item'>
            <div className='shop-item-img'>
            <img
            src={EMFSRC}
            alt="hover"
            onMouseEnter={() => setEMFSrc(EMFTWO)}
            onMouseLeave={() => setEMFSrc(EMFONE)}
            className="hover-image"/>
            </div>
          </div>
        </Link>

      <Link id='item-link' to="/shop/lovelybones">
        <div className='item'>
          <div className='shop-item-img'>
          <img
          src={LBSRC}
          alt="hover"
          onMouseEnter={() => setLBSrc(LOVELYBONESBACK)}
          onMouseLeave={() => setLBSrc(LOVELYBONESFRONT)}
          className="hover-image"/>
          </div>
        </div>
      </Link>
        
      <Link id='item-link' to="/shop/trinity">
        <div className='item'>
          <div className='shop-item-img'>
          <img
          src={TRISRC}
          alt="hover"
          onMouseEnter={() => setTRISrc(TRINITYBACK)}
          onMouseLeave={() => setTRISrc(TRINITYFRONT)}
          className="hover-image"/>
          </div>
        </div>
      </Link>

      </div>
      
      <div className='items'>

      <Link id='item-link' to="/shop/heartofgod">
        <div className='item'>
          <div className='shop-item-img'>
          <img
          src={HOGSRC}
          alt="hover"
          onMouseEnter={() => setHogSrc(HEARTOFGODBACK)}
          onMouseLeave={() => setHogSrc(HEARTOFGODFRONT)}
          className="hover-image"/>
          </div>
        </div>
      </Link>

        <Link id='item-link' to="/shop/trinity">
        <div className='item'>
          <div className='shop-item-img'>
          <img
          src={ENGSRC}
          alt="hover"
          onMouseEnter={() => setENGSrc(ENERGYBACK)}
          onMouseLeave={() => setENGSrc(ENERGYFRONT)}
          className="hover-image"/>
          </div>
        </div>
      </Link>
      <Link id='item-link' to="/shop/trinity">
        <div className='item'>
          <div className='shop-item-img'>
          <img
          src={GLDSRC}
          alt="hover"
          onMouseEnter={() => setGLDSrc(GOLDENBACK)}
          onMouseLeave={() => setGLDSrc(GOLDENFRONT)}
          className="hover-image"/>
          </div>
        </div>
      </Link>
        
       
        </div>

      {/* <div className='items'>
      
      <Link id='item-link' to="/item">

        <div className='item'>
          <div className='shop-item-img'>
          <img
          src={GLDSRC}
          alt="hover"
          onMouseEnter={() => setGLDSrc(GOLDENBACK)}
          onMouseLeave={() => setGLDSrc(GOLDENFRONT)}
          className="hover-image"
          />
          </div>
        </div>
      </Link>

      <Link id='item-link' to="/item">

        <div className='item'>
          <div className='shop-item-img'>
          <img
          src={ENGSRC}
          alt="hover"
          onMouseEnter={() => setENGSrc(ENERGYBACK)}
          onMouseLeave={() => setENGSrc(ENERGYFRONT)}
          className="hover-image"
          />
          </div>
        </div>
      </Link>

      <Link id='item-link' to="/item">

        <div className='item'>
          <div className='shop-item-img'>
          <img
          src={EMSRC}
          alt="hover"
          onMouseEnter={() => setEMSrc(EMBLEMBACK)}
          onMouseLeave={() => setEMSrc(EMBLEMFRONT)}
          className="hover-image"
          />
          </div>
        </div>
      </Link>
      </div> */}
      
      </motion.div>
    <Footer/>
    </div>
  );
}

export default Shop;
