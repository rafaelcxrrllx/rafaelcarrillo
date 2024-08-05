
// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Masonry.css'

// Components
import React from 'react';
import Masonry from 'react-masonry-css';


const MasonryLayout = ({ items }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {items.map(item => (
        <div key={item.id}>
          <img src={item.src} alt={item.alt} />
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryLayout;