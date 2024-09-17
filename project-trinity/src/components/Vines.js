// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Home.css'



import React, { useEffect, useRef } from 'react';



function Vines() {
  // "homepage": "https://rafaelcxrrllx.github.io/trinityla",
  const lottiePlayerRef = useRef(null);

  useEffect(() => {
    const lottieElement = lottiePlayerRef.current;

    const handlePlayAnimation = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lottieElement.play();
        } else {
          lottieElement.stop();
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayAnimation, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    if (lottieElement) {
      observer.observe(lottieElement);
    }

    return () => {
      if (lottieElement) {
        observer.unobserve(lottieElement);
      }
    };
  }, []);

  return (
    <div>
      <section>

      <div id="vine-two" >
        <dotlottie-player 
          
          src="https://lottie.host/c9f78807-0c1f-411c-b164-5a82b3bae9ed/ZXcOSYPY8t.json"
          background="transparent" 
          speed=".5" 
          style={{width: 400, height: 400, transform: 'scaleX(-1) scaleY(-1)', }} 
          autoPlay
          ref={lottiePlayerRef}
          >
        </dotlottie-player>
      </div>

      </section>  
       
    </div>
  );
}

export default Vines;
