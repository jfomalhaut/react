import React, { useState, useEffect } from 'react';
const ADD = 10;
const INITIAL_VALUE = 20;
const TOTAL = [
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
	{id: 1, name: 'name1'},
];

const Scroll1 = () => {
	const [items, setItems] = useState([]);
	const [view, setView] = useState(INITIAL_VALUE);

	const more = () => {
		setView(view + ADD);
	};

	useEffect(() => {
		const piece = TOTAL.filter((item, index) => index < view );
		setItems(piece);
	}, [view]);

	return (
		<div style={{width: '1000px', margin: '0 auto'}}>
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridGap: '10px' }}>
				{items.map((item, idx) => (
					<h1 style={{ height: '150px', backgroundColor: '#ddd'}}>{(idx + 1)}</h1>
				))}
			</div>
			{view < TOTAL.length ? (
				<h1 style={{ cursor: 'pointer', textAlign: 'center', backgroundColor: 'red', color: 'white', padding: '10px 0' }} onClick={more}>+</h1>
			) : null }
		</div>
	);
};

export default Scroll1;