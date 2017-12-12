import React from 'react';
import homepageStyles from '../sass/homepage.scss';

const HomepageAbout = () => {
  return (
    <div className={homepageStyles.about}>
      <div className={homepageStyles.avatar_container}>
        <h3>About:</h3>
        <div className={homepageStyles.avatar}></div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eum consequuntur excepturi nihil asperiores ab rem, quasi, cum dignissimos amet labore. Asperiores possimus maxime sed suscipit optio pariatur consequatur veritatis.</p>
    </div>
  );
}

export default HomepageAbout;