import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../contexts/AppContext';
import { CartItem } from '../components';

const Cart = () => {
	const { state, dispatch } = useContext(AppContext);
	const [totalAmount, setTotalAmount] = useState(0);
	const removeAll = () => {
		dispatch({ type: 'REMOVE_ALL' });
	};

	useEffect(() => {
		const _totalAmount = state.cart.reduce((acc, cur) => {
			acc = acc + cur.price * cur.count;
			return acc;
		}, 0);
		setTotalAmount(_totalAmount);
	}, [state.cart]);

	return (
		<div>
			<hr/>
			<button onClick={removeAll}>전체삭제</button>
			<hr/>
			<div className="list">
				{state.cart.map(item => (
					<CartItem key={`CARTITEM${item.id}`} item={item} />
				))}
			</div>
			<hr/>
			<h1>Total Amount : {totalAmount}원</h1>
		</div>
	);
};

export default Cart;