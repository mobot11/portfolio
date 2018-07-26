import React from 'react';
import Menu from './Menu';
import Header from './Header';

const Blog = () => {
  return (
    <div>
      <Menu />
      <div className="blog">
        <Header pageTitle="Blog Coming Soon" />
      </div>
      <style jsx>{`
      .blog {
        font-size: 14px;
        font-family: 'Roboto', arial, sans-serif;
        font-weight: 400;
        max-width: 1280px;
        color: #090a0f;
      }
      .blog h1 {
        font-weight: bold;
      }
    `}</style>
    </div>
  );
};

export default Blog;
