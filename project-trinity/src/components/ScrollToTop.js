// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    console.log('ScrollToTop triggered');
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

export default ScrollToTop;