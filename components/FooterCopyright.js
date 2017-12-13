import React from 'react';
import footerStyles from '../sass/footer.scss'

const FooterCopyright = () => {
  return (
    <footer className={footerStyles.copyright}>
      <p>
        Copyright Dylan Moberg 2017 <a href="https://github.com/mobot11/portfolio">source</a>
      </p>
    </footer>
  );
}

export default FooterCopyright;