import React from 'react';
import homepageStyles from '../sass/homepage.scss';
import Helmet from 'react-helmet';
import Menu from './Menu';

const Home = () => {
  return (
    <div className={ homepageStyles.component }>
      <Helmet 
        title="Home"
      />
      <Menu />
      <div style={{clear: 'both'}}></div>
      <h1>Homepage</h1>
    </div>
  );
}

export default Home;