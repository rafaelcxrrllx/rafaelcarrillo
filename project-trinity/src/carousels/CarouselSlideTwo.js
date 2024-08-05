import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styling/CarouselSlide.css'; // Optional: your custom styles
import LOVELYBONESFRONT from '../assets/items/lovelybones-front.svg';
import LOVELYBONESBACK from '../assets/items/lovelybones-back.svg';


const CarouselSlideTwo = () => {
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
          <img src={LOVELYBONESFRONT} alt="Image 1" />
        </div>
        <div>
          <img src={LOVELYBONESBACK} alt="Image 1" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSlideTwo;
