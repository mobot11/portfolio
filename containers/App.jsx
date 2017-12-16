import React, { Component }    from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Helmet                  from 'react-helmet';
import appStyles               from '../sass/app.scss';
import Menu                    from '../components/Menu.js';
import Home                    from '../components/Home.js';
import Projects                from '../components/Projects.js';
import Blog                 from  '../components/Blog.js';
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
					titleTemplate="%s | Dylan Moberg"
					titleAttributes={{ itemprop: 'name', lang: 'en' }}
					meta={[
						{ name: 'description', content: 'Dylan Moberg portoflio website' },
						{ name: 'viewport', content: 'width=device-width, inital-scale=1' },
					]}
				/>
				<Route path="/" component={Menu} />
				<Route exact path="/" component={Home} />
				<Route exact path="/projects" component={Projects} />
				<Route exact path="/blog" component={Blog} />
				<Route path="/" component={Footer} />
			</div>
		);
	}
}

export default App;
