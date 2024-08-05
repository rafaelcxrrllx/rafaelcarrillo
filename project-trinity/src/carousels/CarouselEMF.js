import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styling/CarouselSlide.css'; // Optional: your custom styles
import EMFSINGLE from '../assets/items/emf.png';
import EMFMANY from '../assets/items/emf-many.png';
import EMFONE from '../assets/items/emf-one.png';
import EMFTWO from '../assets/items/emf-two.png';
import EMFLA from '../assets/items/emf-la.png';


import EMFTHREE from '../assets/items/emf-three.png';


const CarouselEMF = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 14000,
    arrows: true,
    
    vertical: true, // Add this line to enable vertical scrolling
   

  };

  return (
    <div className="carouselslide-container">
      <Slider {...settings}>
      
        <div>
          <img src={EMFONE} alt="Image 1" />
        </div>
        <div>
          <img src={EMFTWO} alt="Image 2" />
        </div>

        <div>
          <img src={EMFTHREE} alt="Image 3" />
          
        </div>
        <div>
          <img src={EMFSINGLE} alt="Image 4" />
        </div>
        <div>
          <img src={EMFLA} alt="Image 5" />
          
        </div>
    
       
        <div>
          <img src={EMFMANY} alt="Image 6" />
        </div>
       
      </Slider>
    </div>
  );
};

export default CarouselEMF;
