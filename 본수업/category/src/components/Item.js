import React from 'react';

const Item = ({ item: { type, name, price } }) => {
	const transType = type => {
		switch(type) {
			case 1: return '수산물';
			case 2: return '청과';
			case 3: return '야채';
		}
	};

	return (
		<div className="item">
			<div className={`img color${type}`}></div>
			<div className="info">
				<div className="top">
					<span className={`type border${type}`}>{transType(type)}</span>
					<span className="name">{name}</span>
				</div>
				<div className="price">{price}원</div>
			</div>
		</div>
	);
};

export default Item;