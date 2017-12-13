import React from 'react';
import footerStyles from '../sass/footer.scss'

const FooterCopyright = () => {
  return (
    <footer className={footerStyles.copyright}>
      <p>
        Copyright Dylan Moberg 2017
      </p>
      <a href="https://github.com/mobot11/portfolio">Source</a>
    </footer>
  );
}

export default FooterCopyright;