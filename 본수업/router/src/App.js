import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './routes/Home';
import List from './routes/List';
import Detail from './routes/Detail';
import Detail2 from './routes/Detail2';
import Navigation from './components/Navigation';

const App = () => {
	return (
		<BrowserRouter>
			<Navigation/>
			<Switch>
				<Route path="/" exact={true} component={Home}/>
				<Route path="/list" component={List}/>
				<Route path="/detail/:id" component={Detail}/>
				<Route path="/detail2/:src" component={Detail2}/>
				<Redirect path="*" to="/"/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;