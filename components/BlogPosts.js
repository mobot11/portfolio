import React from 'react';
import BlogPost from './BlogPost';
import PropTypes from 'prop-types';

const BlogPosts = ({ posts }) => {
  return (
    <div className="blog-posts-container">
      <BlogPost post={posts} />
      <style jsx>{`
        .blog-posts-container {
          padding: 0 0 40px 0;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.5em;
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

BlogPosts.propTypes = {
  posts: PropTypes.oneOfType(PropTypes.string, PropTypes.array),
};

export default BlogPosts;
