import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './routers/Home';
import About from './routers/About';
import Setting from './routers/Setting';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/home" component={Home} exact />
				<Route path="/about/:data" component={About} />
				<Route path="/setting" component={Setting} />
				<Redirect path="*" to="/home" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;