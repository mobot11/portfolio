import React from 'react';

const FooterCTA = () => {
  return (
    <div className="cta-container">
      <div className="cta-inner">
        <h1 className="cta-headline">
          Interested in working together?
        </h1>
        <a className="cta-email" href="mailto:dylanmoberg11@gmail.com">
          Email me <i className="fa fa-arrow-right" aria-hidden="true" />
        </a>
      </div>
      <style jsx>{`
        .cta-container {
          margin: 0 auto;
          border-top: 1px solid #F0EEEE;
          border-bottom: 1px solid #F0EEEE;
          margin: 0 auto 20px auto;
          line-height: 1.5em;
          opacity: .8;
          padding: 40px 0 60px 0;
        }
        
        .cta-inner {
          text-align: center;
          margin: 0 auto;
        }
        
        .cta-headline {
          letter-spacing: 1.5px;
          padding: 0 0 30px 0;
        }
        
        .cta-email {
          border-radius: 5px;
          border: 1px solid #197993;
          padding: 20px 30px;
          display: inline-block;
          font-style: italic;
          margin: 0 1em;
          margin-bottom: 1em;
          min-width: 10em;
          color: #090a0f;
        }
        .cta-email:hover {
          transform: scale(1.020);
          color: #afb4bc;
          border-color: #d4e1f7;
          transition: all .25s ease; 
        }
        
        a {
          color: $copy_color;
          text-decoration: none;
        }
        
      `}</style>
    </div>
  );
};

export default FooterCTA;
