import React, { useContext, useEffect } from 'react';
import AppContext from '../contexts/AppContext';

const Cart = () => {
	const { state, dispatch } = useContext(AppContext);

	const removeAll = () => {
		dispatch({ type: 'REMOVE_ALL' });
	};

	return (
		<div>
			<h1>Cart Component</h1>
			<div className="list">
				{state.cart.map(item => (
					<div key={`CARTITEM${item.id}`}>
						<div>{item.name}</div>
						<div>{item.price}</div>
						<div>수량 : {item.count}</div>
					</div>
				))}
				<button onClick={removeAll}>전체삭제</button>
			</div>
		</div>
	);
};

export default Cart;