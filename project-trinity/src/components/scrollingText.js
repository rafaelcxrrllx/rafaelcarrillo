// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/ScrollingText.css'

import { motion } from 'framer-motion';

function ScrollingText() {

  return (

    <div>
      <div> 
        <div id='scroll-container'>
            <div class='scroll' id='scroll-one'>
                <div class='scroll-item'>MOBILE APPS</div>
                <div class='scroll-item'>WEB DESIGN</div>
                <div class='scroll-item'>DESIGN THINKING</div>
                <div class='scroll-item'>MOTION GRAPHIC</div>
                <div class='scroll-item'>3D ILLUSTRATION </div>
                <div class='scroll-item'>BRANDING</div>
                <div class='scroll-item'>FIGMA</div>
            </div>
            <div class='scroll' id='scroll-two'>
                
                <div class='scroll-item'>ADOBE</div>
                <div class='scroll-item'>WEB DEVELOPMENT</div>
                <div class='scroll-item'>REACT.JS</div>
                <div class='scroll-item'>GITHUB</div>
                <div class='scroll-item'>PROTOTYPES</div>
                <div class='scroll-item'>WIREFRAMES</div>
                <div class='scroll-item'>COLOR THEORY</div>
             
            </div>
            <div class='fade'></div>
        </div>
      </div>
    </div>
  );
}

export default ScrollingText;
