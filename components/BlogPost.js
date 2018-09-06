import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const BlogPost = ({ post }) => {

  return (
    <div className="post-single">
      <ReactMarkdown source={post} />
    </div>
  );
};

BlogPost.propTypes = {
  post: PropTypes.string,
};

export default BlogPost;
