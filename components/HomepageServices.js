import React from 'react';

const HomepageServices = () => {
  return (
    <div className="services">
      <h3>Services:</h3>
      <div>
        <h4>FRONT END DEVELOPMENT</h4>
        <p>
          I have experience bringing visually stunning designs to life as
          functional, responsive webpages. I have used many cutting edge
          JavaScript and CSS technologies while also ensuring compatibility
          between all browsers.
        </p>
      </div>
      <div>
        <h4>BACK END DEVELOPMENT</h4>
        <p>
          Throughout my career I have built and iterated upon stable, scalabale
          backend tools and services in both NodeJS and PHP that allow efficient
          and performant delivery and handling of website data.
        </p>
      </div>
      <div>
        <h4>CMS & CONTENT MANAGEMENT</h4>
        <p>
          I have previous experience with WordPress and Drupal, two of the most
          popular Content Management tools on the market. At Concur, I am
          currently working on building our own in-house CMS in NodeJS.
        </p>
      </div>
      <style jsx>{`
      @import 'globals';
      
      .services {
        padding: 0 0 40px 0;
        max-width: 800px;
        margin: 0 auto;
        line-height: 1.5em;
        opacity: 0.8;
      }

      .services h4 {
        font-size: 14px;
        color: #197993;
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

export default HomepageServices;
