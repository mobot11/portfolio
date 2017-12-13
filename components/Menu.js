import React from 'react';
import menuStyles from '../sass/menu.scss';
import { NavLink } from 'react-router-dom';

const Menu = () => {
	return (
		<div className={menuStyles.nav_menu}>
			<nav>
			<ul>
				<li>
					<NavLink to={'/'}>Home</NavLink>
				</li>
				<li>
					<NavLink to={'/projects'}>Projects</NavLink>
				</li>
				<li>
					<NavLink to={'/contact'}>Contact</NavLink>
				</li>
			</ul>
			</nav>
		</div>
		
	);
};

export default Menu;