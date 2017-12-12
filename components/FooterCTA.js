import React from 'react';
import footerStyles from '../sass/footer.scss';

const FooterCTA = () => {
  return (
    <div className={footerStyles.cta_container}>
      <div className={footerStyles.cta_inner}>
        <h1 className={footerStyles.cta_headline}>Interested in working together?</h1>
          <a className={footerStyles.cta_email} href="mailto:dylanmoberg11@gmail.com">Email me <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
      </div>
    </div>
  );
}

export default FooterCTA;