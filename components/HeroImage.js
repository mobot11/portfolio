import React from 'react';
import PropTypes from 'prop-types';

const HeroImage = ({ imgUrl }) => {
  return (
    <div className="hero-container">
      <div className="hero-image">
      </div>
      <style jsx>{`
      .hero-container {
        max-width: 1280px;
        padding: 0 0 40px 0;
        margin: 0 auto;
      }
      .hero-image {
        background: url('${imgUrl}') no-repeat top;
        width: 100%;
        padding: 0 0 45% 0;
        background-size: 100% auto;
      }
    `}</style>
    </div>
  );
};

HeroImage.propTypes = {
  imgUrl: PropTypes.string,
};

export default HeroImage;
