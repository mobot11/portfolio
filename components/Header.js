import React from 'react';

const Header = ({ pageTitle }) => {
  return (
    <div>
      <div style={{clear: 'both'}} />
      <div className="header-container">
        <div className="title">
          <h1>{pageTitle}</h1>
        </div>
      </div>
      <style jsx>{`
        .header-container {
          max-width: 815px;
          margin: 60px auto 80px auto;
          color: #090a0f;
          padding: 0 10px;
          overflow: visible;
        }
        .header-container h1 {
          opacity: .8;
          line-height: 1.5em;
          letter-spacing: 1px;
        }
        @media screen and (max-width: 800px) {
          .header-container {
            margin: 0 auto 60px auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
