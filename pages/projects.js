import React from 'react';
import Projects from '../components/Projects';
import GlobalStyles from '../components/GlobalStyles';
import GlobalHead from '../components/GlobalHead';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const ProjectPage = () => {
  return (
    <GlobalStyles>
      <Menu />
      <GlobalHead pageName="Projects" />
      <Projects />
      <Footer />
    </GlobalStyles>
  );
};

export default ProjectPage;
