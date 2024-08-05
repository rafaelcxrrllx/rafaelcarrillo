// VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ src, type, poster, className }) => {
  return (
    <video className={className} poster={poster}  autoPlay loop muted>
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;