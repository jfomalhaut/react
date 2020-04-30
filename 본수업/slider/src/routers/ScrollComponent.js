import React, { useEffect, useState } from 'react';
import './ScrollComponent.css';

const ScrollComponent = () => {
	const [top, setTop] = useState(0);

	const onScroll = ev => {
		const { srcElement: { scrollingElement: { scrollTop } } } = ev;
		setTop(scrollTop);
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll');
		}
	}, []);

	return (
		<div className="scrollContainer">
			<header className={top > 0 ? 'fix' : '' }>
				<h1>HEADER</h1>
			</header>
			<main>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
			</main>
		</div>
	);
};

export default ScrollComponent;