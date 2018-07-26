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
          imgUrl='/static/images/hero-office.jpg'
          alt="Picture of office desk"
        />
        <HomepageAbout />
        <HomepageServices />
      </div>
      <Footer />
      <style global jsx>{`
      .component {
        color: #090a0f;
      }
      
      .about, .services {
        padding: 0 0 40px 0;
        max-width: 800px;
        margin: 0 auto;
        line-height: 1.5em;
        opacity: 0.8;
      }
      
      .about h4, .services h4 {
        font-size: 14px;
        color: #197993;
      }

      .about {
        margin-top: 60px;
      }
      
      .about a {
        color: #197993;
      }
      
      .about a:hover {
        text-decoration: underline;
      }
      
      .avatar_container {
        display: flex;
        justify-content: space-between;
      }
      
      .avatar_container h3 {
          align-self: flex-end;
          // vertical-align: bottom;
      }
      
      .avatar {
        background: url('../images/headshot.jpg');
        border-radius: 20px;
        width: 150px;
        height: 150px;
        background-size: contain;
        margin-right: 25px;
        background-repeat: no-repeat;
      }
      
      @media screen and (max-width: 800px) {
        .avatar {
          background-size: cover;
        }
      }
    `}</style>
    </div>
  );
};

export default Home;
