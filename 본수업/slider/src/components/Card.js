import React from 'react';

const Card = ({ item }) => {
	return (
		<div className="card">
			<img src={item.cardSrc} />
		</div>
	);
};

export default Card;