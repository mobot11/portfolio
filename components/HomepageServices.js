import React from 'react';
import homeStyles from '../sass/homepage.scss';

const HomepageServices = () => {
	return (
		<div className={homeStyles.services}>
			<h3>Services:</h3>
			<div>
				<h4>FRONT END DEVELOPMENT</h4>
				<p>
					I have experience bringing visually stunning designs to life as functional, responsive webpages. I have used many cutting edge JavaScript and CSS technologies while also ensuring compatibility between all browsers.
				</p>
			</div>
			<div>
				<h4>BACK END DEVELOPMENT</h4>
				<p>
					Throughout my career I have built and iterated upon stable, scalabale backend tools and services in both NodeJS and PHP that allow efficient and performant delivery and handling of website data.
				</p>
			</div>
			<div>
				<h4>CMS & CONTENT MANAGEMENT</h4>
				<p>
					I have previous experience with WordPress and Drupal, two of the most popular Content Management tools on the market. At Concur, I am currently working on building our own in-house CMS in NodeJS.
				</p>
			</div>
		</div>
	);
};

export default HomepageServices;
