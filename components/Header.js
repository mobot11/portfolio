import React from 'react';
import headerStyles from '../sass/header.scss';

const Header = ({pageTitle}) => {
  return (
    <div>
      <div style={{clear: 'both'}}></div>
      <div className={headerStyles.header_container}>
        <h1>{pageTitle}</h1>
      </div>
    </div>
  );
};

export default Header;