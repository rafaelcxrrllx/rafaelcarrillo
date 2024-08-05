// Global Styling
import '../styling/styles.css'

// Styling
import '../styling/BlogCarousel.css';

// Components
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Assets
import img3 from '../assets/illuminated.jpg'
import img2 from '../assets/christSatan.jpg'
import img1 from '../assets/justice.png'


const BlogCarousel = () => {
  const images = [
   img1,
   img2,
   img3
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div 
      initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
      animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
      transition={{ duration: 1 }}
      className='carousel-container'>
    <div className="blog-carousel">
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
    </motion.div>
  );
};

export default BlogCarousel;
