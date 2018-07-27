import React from 'react';

const HomepageAbout = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="avatar_container">
          <h3>About:</h3>
          <div className="avatar"></div>
        </div>
      </div>
      <p>
        I am currently working as a Web Developer II at <a href="https://www.concur.com/">Concur Technologies</a> building elegant, easy to use web tools to support Concur&apos;s digital marketing initiatives. My previous work history can be viewed on <a href="https://www.linkedin.com/in/dylanmoberg">LinkedIn</a>. Outside of work I enjoy experiencing the fantastic Seattle music and restaurant scene or exploring the natural beauty of the Pacific Northwest. I am always open to new opportunities, don&apos;t hesitate to get in touch!
      </p>
      <style jsx>{`
      .about {
        padding: 0 0 40px 0;
        max-width: 800px;
        margin: 0 auto;
        line-height: 1.5em;
        opacity: 0.8;
      }
      
      .about h4 {
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
      }
      
      .avatar {
        background: url('/static/images/headshot.jpg');
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

export default HomepageAbout;
