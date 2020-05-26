import React, { useReducer, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, List, Cart } from './routers';
import CartReducer from './reducers/CartReducer';
import AppContext from './contexts/AppContext';
import { Navigator } from './components';

const initialState = {
	cart: []
};

const App = () => {
	const [state, dispatch] = useReducer(CartReducer, initialState);

	return (
		<BrowserRouter>
			<Switch>
				<AppContext.Provider value={{ state, dispatch }}>
					<Navigator />
					<Route path="/" exact component={Home} />
					<Route path="/list" exact component={List} />
					<Route path="/cart" exact component={Cart} />
				</AppContext.Provider>
			</Switch>
		</BrowserRouter>
	);
};

export default App;