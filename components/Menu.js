import menuStyles from '../sass/menu.scss';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

import React, { Component } from 'react';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: true,
		};
	}

	componentDidUpdate() {
		console.log(this.state);
		if (!this.state.hidden) {
			$('.menu')
				.find('.social_link')
				.addClass('test')
				.fadeIn('slow');
		}
	}

	componentDidMount() {
		this.$social = $(this.social);
		$(this.$social).on('click', ()=> {
			$('.social_item').toggle('slide');
		}); 
	}

	render() {
		return (
			<div className={menuStyles.nav_menu}>
				<nav>
					<ul className="menu">
						<li>
							<NavLink to={'/'}>Home</NavLink>
						</li>
						<li>
							<NavLink to={'/projects'}>Projects</NavLink>
						</li>
						<li>
							<NavLink to={'/blog'}>Blog</NavLink>
						</li>
						<li
							className={`${menuStyles.social} hidden`}
							ref={social => {
								this.social = social;
							}}
						>
							Social
						</li>
						<li className="social_item" style={{display: 'none'}}><a href="https://www.linkedin.com/in/dylanmoberg"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
						<li className="social_item" style={{display: 'none'}}><a href="https://www.github.com/mobot11"><i className="fa fa-github" aria-hidden="true"></i></a></li>
						<li className="social_item" style={{display: 'none'}}><a href="https://www.twitter.com/mobot11"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
						<li className="social_item" style={{display: 'none'}}><a href="mailto:dylanmoberg11@gmail.com"><i className="fa fa-envelope-open" aria-hidden="true"></i></a></li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Menu;
