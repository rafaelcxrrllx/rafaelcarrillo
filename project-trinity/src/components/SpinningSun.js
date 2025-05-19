// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/SpinningSun.css'

// Local Assets
import sun from '../assets/sun.png';
import text from '../assets/circle-text.svg';

import { motion } from 'framer-motion';

function SpinningSun() {

  return (

    <div>
      <div class="spin-container">
        <img src={sun} alt="sun" class="center-image" />
        <div class="circular-text"> <img src={text} alt="text" class="center-image" /></div>
      </div>
    </div>
  );
}

export default SpinningSun;
