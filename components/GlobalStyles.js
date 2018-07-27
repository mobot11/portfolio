import React from 'react';
import PropTypes from 'prop-types';
import NormalizeCss from './NormalizeCss';

const GlobalStyles = ({ children }) => {
  return (
    <div>
      {children}
      <NormalizeCss />
      <style global jsx>{`
      body {
        padding: 0 75px;
        border: 8px solid #090a0f;
        font-family: "Roboto", arial, sans-serif; 
      }
      html {
        height: 100%;
      }
      h1, h2, p {
        color: #090a0f;
      }
      h4 {
        font-size: 14px;
        color: #197993;
      }
      @media screen and (max-width: 800px) {
        body {
          padding: 0 25px;
        }
        h1 {
          font-size: 28px;
        }
      }
      
      h1, h2, h3 {
        letter-spacing: 1px;
      }

      a {
        text-decoration: none;
      }
      `}</style>
    </div>
  );
};

GlobalStyles.propTypes = {
  children: PropTypes.any,
};

export default GlobalStyles;
