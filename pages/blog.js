import React from 'react';
import GlobalHead from '../components/GlobalHead';
import GlobalStyles from '../components/GlobalStyles';
import Menu from '../components/Menu';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

const BlogPage = () => {
  return (
    <div>
      <GlobalStyles>
        <Menu />
        <GlobalHead pageName="Blog" />
        <Blog />
        <Footer />
      </GlobalStyles>
      <style global jsx>{`
        body {
          height: 100%;
        }
      `}</style>
    </div>
  );
};

BlogPage.propTypes = {};

export default BlogPage;
