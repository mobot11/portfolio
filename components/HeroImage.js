import React from 'react';
import heroStyles from '../sass/hero.scss'

const HeroImage = ({imgUrl, altText}) => {
  return (
    <div className={heroStyles.heroContainer}>
      <div className={heroStyles.heroImage}></div>
    </div>
  );
}

export default HeroImage;