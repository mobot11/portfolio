import React, { Component }    from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Helmet                  from 'react-helmet';
import appStyles               from '../sass/app.scss';
import Menu                    from '../components/Menu.js';
import Home                    from '../components/Home.js';
import Projects                from '../components/Projects.js';
import Contact                 from  '../components/Contact.js';
import Footer                  from '../components/Footer';
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
				<Route path="/" component={Menu} />
				<Route exact path="/" component={Home} />
				<Route path="/projects" component={Projects} />
				<Route path="/contact" component={Contact} />
				<Route path="/" component={Footer} />
			</div>
		);
	}
}

export default App;
