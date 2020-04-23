import React, { useState } from 'react';
import './List2.css';

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

const List2 = () => {
	const [view, setView] = useState(ITEMS);

	const setCategory = val => {
		if (val === 0) {
			setView(ITEMS);
			return;
		}
		const after = ITEMS.filter(item => item.type === val);
		setView(after);
	}

	return (
		<div>
			<div>
				<button onClick={() => setCategory(0)}>전체</button>
				<button onClick={() => setCategory(1)}>카테고리1</button>
				<button onClick={() => setCategory(2)}>카테고리2</button>
				<button onClick={() => setCategory(3)}>카테고리3</button>
			</div>
			<div>
				<h1>전체 (ITEMS)</h1>
				<div className="domino">
					{ITEMS.map(item => (
						<div className="dominoItem">{item.name}</div>
					))}
				</div>
			</div>
			<div>
				<h1>보여지는 부분 (view)</h1>
				{view.map(item => (
					<h3>{item.name}</h3>
				))}
			</div>
		</div>
	);
};

export default List2;