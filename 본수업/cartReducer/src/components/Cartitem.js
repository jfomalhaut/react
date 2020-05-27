import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

const CartItem = ({ item }) => {
	const { state, dispatch } = useContext(AppContext);

	const onChangeCount = ev => {
		const { target: { value } } = ev;
		dispatch({ type: 'SET_COUNT', data: {...item, count: Number(value)}});
	};

	const remove = () => {
		dispatch({ type: 'REMOVE_ITEM', data: { id: item.id } });
	};

	return (
		<div key={`CARTITEM${item.id}`}>
			<div>{item.name}</div>
			<div>Unit Price : {item.price}</div>
			<div>Amount: {item.price * item.count}</div>
			<select value={item.count} onChange={onChangeCount}>
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
			</select>
			<button onClick={remove}>Delete</button>
		</div>
	);
};

export default CartItem;