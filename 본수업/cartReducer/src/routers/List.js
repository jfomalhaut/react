import React, { useState } from 'react';
import ListItem from '../components/ListItem';

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

	return (
		<div>
			<h1>List Component</h1>
			<div className="list">
				{ITEMS.map(item => (
					<ListItem item={item} key={`ITEM${item.id}`}/>
				))}
			</div>
		</div>
	);
};

export default List;