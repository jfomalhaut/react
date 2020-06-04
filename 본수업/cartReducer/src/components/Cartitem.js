import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

const CartItem = ({ item }) => {
	const { state, dispatch } = useContext(AppContext);

	const onChangeCount = ev => {
		const { target: { value } } = ev;
		// 숫자만 되게끔 해주기. 아니면 return
		dispatch({ type: 'SET_COUNT', data: {...item, count: Number(value)}});
	};

	const remove = () => {
		dispatch({ type: 'REMOVE_ITEM', data: { id: item.id } });
	};

	const plus = () => {
		if (item.count > 998) {
			return;
		}
		dispatch({ type: 'SET_COUNT', data: {...item, count: Number(item.count + 1)}});
	};

	const minus = () => {
		if (item.count < 2) {
			return;
		}
		dispatch({ type: 'SET_COUNT', data: {...item, count: Number(item.count - 1)}});
	};

	return (
		<div key={`CARTITEM${item.id}`}>
			<div>{item.name}</div>
			<div>Unit Price : {item.price}</div>
			<div>Amount: {item.price * item.count}</div>
			<button onClick={plus}>+</button>
			<input type="text" value={item.count} onChange={onChangeCount} />
			<button onClick={minus}>-</button>
			<br/>
			<button onClick={remove}>Delete</button>
		</div>
	);
};

export default CartItem;