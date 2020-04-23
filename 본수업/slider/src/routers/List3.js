import React from 'react';
import Item2 from '../components/Item2';
import './List3.css';

const ITEMS = [ // 변경 X
	{id: 1, name: 'item1', type: 1 },
	{id: 2, name: 'item2', type: 1 },
	{id: 3, name: 'item3', type: 1 },
	{id: 4, name: 'item4', type: 2 },
	{id: 5, name: 'item5', type: 2 },
	{id: 6, name: 'item6', type: 2 },
	{id: 7, name: 'item7', type: 3 },
	{id: 8, name: 'item8', type: 3 },
	{id: 4, name: 'item4', type: 2 },
	{id: 5, name: 'item5', type: 2 },
	{id: 6, name: 'item6', type: 2 },
	{id: 7, name: 'item7', type: 3 },
	{id: 8, name: 'item8', type: 3 },
	{id: 4, name: 'item4', type: 2 },
	{id: 5, name: 'item5', type: 2 },
	{id: 6, name: 'item6', type: 2 },
	{id: 7, name: 'item7', type: 3 },
	{id: 8, name: 'item8', type: 3 },
	{id: 4, name: 'item4', type: 2 },
	{id: 5, name: 'item5', type: 2 },
	{id: 6, name: 'item6', type: 2 },
	{id: 7, name: 'item7', type: 3 },
	{id: 8, name: 'item8', type: 3 },
];

const List3 = () => {
	return (
		<div className="container">
			{ITEMS.map((item, index) => (
				<Item2 index={index} item={item} />
			))}
		</div>
	);
};

export default List3;