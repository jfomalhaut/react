import React from 'react';
import './Item.css';

const Item = ({ item: { id, name, price, src, main } }) => {
	return (
		<div className={`item ${ main ? 'main' : '' }`}>
			<img className="img" src={src} />
			<div className="name">{name}</div>
			<div className="price">${price}</div>
		</div>
	); 
};

export default Item;