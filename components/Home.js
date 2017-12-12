import React            from 'react';
import homepageStyles   from '../sass/homepage.scss';
import Helmet           from 'react-helmet';
import Menu             from './Menu';
import Header           from './Header';
import HeroImage        from './HeroImage';
import HomepageAbout    from './HomepageAbout';
import HomepageServices from './HomepageServices';
import Footer           from './Footer';
const path = require('path');

const Home = () => {
  return (
    <div className={ homepageStyles.component }>
      <Helmet 
        title="Home"
      />
      <Header pageTitle='Hello my name is Dylan. I am a Full Stack Developer living in Seattle, Washington' />
      <HeroImage imgUrl={path.resolve(__dirname, '../images/') + '/hero-office.jpg'} alt='Picture of office desk' />
      <HomepageAbout />
      <HomepageServices />
      <Footer />
    </div>
  );
}

export default Home;