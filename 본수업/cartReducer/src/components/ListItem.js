import React, {useContext, useState} from 'react';
import AppContext from '../contexts/AppContext';

const ListItem = ({ item }) => {
	const [count, setCount] = useState('1');
	const { state, dispatch } = useContext(AppContext);
	
	const onCart = item => {
		dispatch({ type: 'ADD_CART', data: {...item, count: Number(count)}});
	};

	const onChangeCount = ev => {
		const {target: {value}} = ev;
		setCount(value);
	};

	return (
		<div style={{ margin: '20px 0' }}>
			<h2>{item.name}</h2>
			<input type="text" value={count} onChange={onChangeCount} />
			<button onClick={() => onCart(item)}>
				<h1>담기</h1>
			</button>
		</div>
	)
};

export default ListItem;