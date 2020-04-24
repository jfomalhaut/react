import React, { useState, useEffect } from 'react';
import './Item2.css';

const Item2 = ({ index, item: { name, type }}) => {
	const [className, setClassName] = useState('');

	useEffect(() => {
		if (index < 3 && index >= 0) {
			setClassName('type1');
		} else if (index >= 3 && index < 7) {
			setClassName('type2');
		} else {
			setClassName('type3');
		}
	}, []);
	
	return (
		<div className={`item ${className}`}>
			{name}
		</div>
	);
};

export default Item2;