import React from 'react';

const Menu = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to={'/'}>Homepage</Link>
				</li>
				<li>
					<Link to={'/about'}>About</Link>
				</li>
				<li>
					<Link to={'/contact'}>Contact</Link>
				</li>
			</ul>
		</div>
	);
};

export default Menu;