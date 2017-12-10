import React from 'react';
import contactStyles from '../sass/contact.scss';
import Menu from './Menu';
import Helmet from 'react-helmet';
import Header from './Header';

const Contact = () => {
  return (
    <div className={ contactStyles.component }>
      <Helmet 
        title="Contact"
      />
      <Header pageTitle='Contact' />
    </div>
  );
}

export default Contact;