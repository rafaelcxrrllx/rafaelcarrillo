// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/SpinningSun.css'

// Local Assets
import star from '../assets/star.png';
import text from '../assets/circle-text-dark.svg';

import { motion } from 'framer-motion';

function SpinningStar() {

  return (

    <div>
      <div class="spin-container">
        <img src={star} alt="star" class="center-image" />
        <div class="circular-text"> <img src={text} alt="text" class="center-image" /></div>
      </div>
    </div>
  );
}

export default SpinningStar;
