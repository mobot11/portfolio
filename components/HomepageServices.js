import React from 'react';
import homeStyles from '../sass/homepage.scss';

const HomepageServices = () => {
	return (
		<div className={homeStyles.services}>
			<h3>Services:</h3>
			<div>
				<h4>FRONT END DEVELOPMENT</h4>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. A beatae
					dicta doloribus unde esse, ipsum, nobis magnam cupiditate, corporis
					magni maxime non. Beatae fugit velit odit quia nobis aut rem!
				</p>
			</div>
			<div>
				<h4>BACK END DEVELOPMENT</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
					omnis possimus ratione, delectus quaerat ea facere praesentium saepe
					nostrum placeat dolore dignissimos? Modi fugiat laborum nostrum saepe
					labore maiores consequatur?
				</p>
			</div>
			<div>
				<h4>CMS & CONTENT MANAGEMENT</h4>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
					tempora adipisci laborum debitis rerum eligendi veniam iure nam
					quisquam obcaecati atque cupiditate, commodi vitae sed perferendis ab
					cumque sapiente. Labore?
				</p>
			</div>
		</div>
	);
};

export default HomepageServices;
