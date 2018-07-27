import React from 'react';
import GlobalHead from '../components/GlobalHead';
import GlobalStyles from '../components/GlobalStyles';
import Home from '../components/Home';

const index = props => {
  return (
    <GlobalStyles>
      <div>
        <GlobalHead pageName="Home" />
        <Home />
        <style global jsx>{`
        `}</style>
      </div>
    </GlobalStyles>
  );
};

index.propTypes = {};

export default index;
