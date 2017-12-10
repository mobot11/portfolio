import React from 'react';
import aboutStyles from '../sass/about.scss'
import Menu from './Menu';

const About = () => {
  return (
    <div className={ aboutStyles.component }>
      <Helmet 
        title="About"
      />
      <Menu />
      <h1>About</h1>
    </div>
  );
}

export default About;