import React, { Component } from 'react';
import GlobalHead from '../components/GlobalHead';
import GlobalStyles from '../components/GlobalStyles';
import Menu from '../components/Menu';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';

export default class BlogPage extends Component {
  static async getInitialProps({ req }) {
    if (req) {
      const protocol = req.headers['x-forwarded-proto'] || 'http';
      const baseUrl = `${protocol}://${req.headers.host}`;
      const url = `${baseUrl}/api/blog/posts/all`;
      try {
        const response = await fetch(url);
        const blogJson = await response.json();
        return { blogPost: blogJson };
      } catch (err) {
        return { error: err };
      }
    } else {
      const url = '/api/blog/posts/all';
      try {
        const response = await fetch(url);
        const blogJson = await response.json();
        return { blogPost: blogJson };
      } catch (err) {
        return { error: err };
      }
    }
  }

  render() {
    const { blogPost } = this.props;
    return (
      <div>
        <GlobalStyles>
          <Menu />
          <GlobalHead pageName="Blog" />
          <Blog blogPost={blogPost} />
          <Footer />
        </GlobalStyles>
      </div>
    );
  }
}

BlogPage.propTypes = {
  blogPost: PropTypes.string,
};
