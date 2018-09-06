import React from 'react';
import Header from './Header';
import BlogPosts from './BlogPosts';

const Blog = ({ blogPost }) => {
  return (
    <div>
      <Header pageTitle="Blog" />
      <BlogPosts posts={blogPost} />
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
