import React, { useState, useEffect } from "react";
import '../styling/Typewriter.css'

const Typewriter = () => {
  const phrases = [
    "I am a Designer",
    "I am a Developer",
    "I am a Researcher",
    "I am a Problem-solver",
  ];

  const [currentText, setCurrentText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      const isTypingComplete = charIndex === currentPhrase.length;

      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setCharIndex(0);
        }
      } else {
        setCurrentText((prev) => currentPhrase.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (isTypingComplete) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(type, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, charIndex, currentPhraseIndex]);

  return (
    <div className="typewriter">
      <span>{currentText}</span>
      <span className="cursor">|</span>
    </div>
  );
};

export default Typewriter;