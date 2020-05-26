import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { Link } from 'react-router-dom';

const Navigator = () => {
	const { state, dispatch } = useContext(AppContext);
	return (
		<header>
			<h2>장바구니 : { state.cart.length }</h2>
			<div>
				<Link to="/">Home</Link>
				<Link to="/list">List</Link>
				<Link to="/cart">Cart</Link>
			</div>
		</header>
	);
};

export default Navigator;