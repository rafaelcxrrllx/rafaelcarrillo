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
                <div class='scroll-item'>LOVED NOT OWNED</div>
                <div class='scroll-item'>LOVED NOT OWNED</div>
                <div class='scroll-item'>LOVED NOT OWNED</div>
                <div class='scroll-item'>LOVED NOT OWNED</div>
                <div class='scroll-item'>LOVED NOT OWNED</div>
                <div class='scroll-item'>LOVED NOT OWNED</div>
                <div class='scroll-item'>LOVED NOT OWNED</div>
                <div class='scroll-item'>LOVED NOT OWNED</div>
               
            </div>
            <div class='scroll' id='scroll-two'>
                
                <div class='scroll-item'>LOVED NOT OWNED</div>
                <div class='scroll-item'>LOVED NOT OWNED</div>
                <div class='scroll-item'>LOVED NOT OWNED</div>
                <div class='scroll-item'>LOVED NOT OWNED</div>
                <div class='scroll-item'>LOVED NOT OWNED</div>
                <div class='scroll-item'>LOVED NOT OWNED</div>
                <div class='scroll-item'>LOVED NOT OWNED</div>
                <div class='scroll-item'>LOVED NOT OWNED</div>
             
            </div>
            <div class='fade'></div>
        </div>
      </div>
    </div>
  );
}

export default ScrollingText;
