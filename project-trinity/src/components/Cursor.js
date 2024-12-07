import React, { useState, useEffect } from "react";
import "../styling/Cursor.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY + 24 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="circle"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    ></div>
  );
};

export default Cursor;