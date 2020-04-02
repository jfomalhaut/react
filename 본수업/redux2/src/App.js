import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import List from './routers/List';
import Cart from './routers/Cart';
import { useSelector } from 'react-redux';

const App = () => {
	// 구독 subscribe
	const length = useSelector(({ cartReducer }) => {
		return cartReducer.cart.length;
	});

	return (
		<BrowserRouter>
			<header>
				<h1>장바구니 : {length}</h1>
			</header>
			<ul>
				<li>
					<Link to="/list">상품리스트</Link>
					<Link to="/cart">장바구니</Link>
				</li>
			</ul>
			<Switch>
				<Route path="/list" exact component={List} />
				<Route path="/cart" component={Cart} />
				<Redirect path="*" to="/list" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;