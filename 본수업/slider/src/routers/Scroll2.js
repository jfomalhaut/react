import React, { useState, useEffect, useRef } from 'react';
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

const Scroll2 = () => {
	const itemsRef = useRef();
	const [items, setItems] = useState([]);
	const [position, setPosition] = useState(0);
	const [browserHeight, setBrowserHeight] = useState(0);
	const [view, setView] = useState(INITIAL_VALUE);

	const onScroll = ev => {
		const { srcElement: { scrollingElement: { scrollTop } } } = ev;
		setPosition(scrollTop);
	};

	const onBrowser = ev => {
		const { srcElement: { innerHeight } } = ev;
		setBrowserHeight(innerHeight);
	};

	useEffect(() => {
		const { current: { offsetHeight } } = itemsRef;
		const botPosition = browserHeight + position;

		if ((offsetHeight - 300) < botPosition) {
			setView(view + ADD);
		}
	}, [position]);

	useEffect(() => {
		const piece = TOTAL.filter((item, index) => index < view );
		setItems(piece);
	}, [view]);

	useEffect(() => {
		setBrowserHeight(window.innerHeight);
		window.addEventListener('scroll', onScroll);
		window.addEventListener('resize', onBrowser);

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onBrowser);
		}
	}, []);

	return (
		<div style={{width: '1000px', margin: '0 auto'}}>
			<div ref={itemsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridGap: '10px' }}>
				{items.map((item, idx) => (
					<h1 style={{ height: '200px', backgroundColor: '#ddd'}}>{(idx + 1)}</h1>
				))}
			</div>
		</div>
	);
};

export default Scroll2;