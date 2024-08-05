// Global Styling
import '../styling/styles.css'

// Styling
import '../styling/Carousel.css';

// Components
import React, { useState, useEffect } from 'react';

// Assets
import img1 from '../assets/hero-shot.jpeg'
import img2 from '../assets/hero-shot-2.jpeg'


const Carousel = () => {
  const images = [
   img1,
   img2,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='carousel-container'>
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Carousel;
