import React from 'react';

const ItemList = ({ name, price }) => {
	return (
		<div>
			<h1>{name}</h1>
			<h1>{price}원</h1>
		</div>
	);
};

export default ItemList;