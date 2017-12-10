import React from 'react';
import contactStyles from '../sass/contact.scss';
import Menu from './Menu';

const Contact = () => {
  return (
    <div className={ contactStyles.component }>
      <Helmet 
        title="Contact"
      />
      <Menu />
      <h1>Contact</h1>
    </div>
  );
}

export default Contact;