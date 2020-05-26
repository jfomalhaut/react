import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

const ITEMS = [
	{id: 1, name: 'item1', price: 1000},
	{id: 2, name: 'item2', price: 2000},
	{id: 3, name: 'item3', price: 3000},
	{id: 4, name: 'item4', price: 4000},
	{id: 5, name: 'item5', price: 5000},
	{id: 6, name: 'item6', price: 6000},
	{id: 7, name: 'item7', price: 7000},
	{id: 8, name: 'item8', price: 8000},
];

const List = () => {
	const { state, dispatch } = useContext(AppContext);
	
	const onCart = item => {
		dispatch({ type: 'ADD_CART', data: item});
	};

	return (
		<div>
			<h1>List Component</h1>
			<div className="list">
				{ITEMS.map(item => (
					<div key={`ITEM${item.id}`} style={{ margin: '20px 0' }}>
						<h2>{item.name}</h2>
						<button onClick={() => onCart(item)}>
							<h1>담기</h1>
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default List;