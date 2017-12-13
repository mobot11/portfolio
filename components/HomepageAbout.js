import React from 'react';
import homepageStyles from '../sass/homepage.scss';

const HomepageAbout = () => {
  return (
    <div className={homepageStyles.about}>
      <div className={homepageStyles.avatar_container}>
        <h3>About:</h3>
        <div className={homepageStyles.avatar}></div>
      </div>
      <p>
        I am currently working as a Web Developer II at <a href="https://www.concur.com/">Concur Technologies</a> building elegant, easy to use web tools to support Concur's digital marketing initiatives. My previous work history can be viewed on <a href="https://www.linkedin.com/in/dylanmoberg">LinkedIn</a>. Outside of work I enjoy experiencing the fantastic Seattle music and restaurant scene or exploring the natural beauty of the Pacific Northwest. I am always open to new opportunities, don't hesitate to get in touch!
      </p>
    </div>
  );
}

export default HomepageAbout;