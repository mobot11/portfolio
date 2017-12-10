import React from 'react';

const Home = () => {
  return (
    <div className={ homepageStyles.component }>
      <Helmet 
        title="Home"
      />
      <Menu />
      <h1>Homepage</h1>
    </div>
  );
}

export default Home;