import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styling/CarouselSlide.css'; // Optional: your custom styles
import heartofgod1front from '../assets/items/shirt1-front.svg';
import heartofgod1back from '../assets/items/shirt1-back.svg';


const CarouselSlide = () => {
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
          <img src={heartofgod1front} alt="Image 1" />
        </div>
        <div>
          <img src={heartofgod1back} alt="Image 2" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSlide;
