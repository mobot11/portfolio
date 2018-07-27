import React from 'react';

const FooterCopyright = () => {
  return (
    <footer className="copyright">
      <p>
        Copyright Dylan Moberg 2017{' '}
        <a href="https://github.com/mobot11/portfolio">source</a>
      </p>
      <style jsx>{`
        .copyright {
          padding: 30px 0 50px 0;
        }
        
        .copyright p {
          text-align: center;
          margin: 0 auto;
        }
        
        .copyright a {
          color: #197993;
          font-style: italic;
          font-size: 12px;
          text-decoration: none;
        }
        
        .copyright a:hover {
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
};

export default FooterCopyright;
