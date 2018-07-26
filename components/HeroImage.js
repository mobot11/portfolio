import React from 'react';

const HeroImage = ({ imgUrl, altText }) => {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <img src={imgUrl} alt={altText} />
      </div>
    </div>
  );
};

export default HeroImage;
