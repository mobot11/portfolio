import React from 'react';
import Header from './Header';
import HeroImage from './HeroImage';
import HomepageAbout from './HomepageAbout';
import HomepageServices from './HomepageServices';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Menu />
      <div className="homepage">
        <Header pageTitle="Hello my name is Dylan. I am a Full Stack Developer living in Seattle, Washington" />
        <HeroImage
          imgUrl='/static/images/hero-image.jpg'
          alt="Picture of office desk"
        />
        <HomepageAbout />
        <HomepageServices />
      </div>
      <Footer />
      <style jsx>{`
      .component {
        color: #090a0f;
      }
    `}</style>
    </div>
  );
};

export default Home;
