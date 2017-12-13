import React from 'react';
import blogStyles from '../sass/blog.scss';
import Menu from './Menu';
import Helmet from 'react-helmet';
import Header from './Header';

const Blog = () => {
  return (
    <div className={ blogStyles.component }>
      <Helmet 
        title="Blog"
      />
      <Header pageTitle='Blog Coming Soon' />
    </div>
  );
}

export default Blog;