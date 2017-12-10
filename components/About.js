import React from 'react';
import aboutStyles from '../sass/about.scss';
import Helmet from 'react-helmet';
import Menu from './Menu';
import Header from './Header';

const About = () => {
  return (
    <div className={ aboutStyles.component }>
      <Helmet 
        title="About"
      />
      <Header pageTitle='About' />
    </div>
  );
}

export default About;