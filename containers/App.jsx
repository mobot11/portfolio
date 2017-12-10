import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import homepageStyles from '../sass/homepage.scss';
import Menu from '../components/Menu.js';
import Home from '../components/Home.js';
import About from '../components/About.js';
import contact from '../components/Contact.js';

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Helmet
					htmlAttributes={{ lang: 'en', amp: undefined }}
					titleTemplate="%s | React App"
					titleAttributes={{ itemprop: 'name', lang: 'en' }}
					meta={[
						{ name: 'description', content: 'Server side rendering example' },
						{ name: 'viewport', content: 'width=device-width, inital-scale=1' },
					]}
				/>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</div>
		);
	}
}

export default App;
