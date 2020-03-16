import React from 'react';

const Item = ({ item }) => {
	const transType = type => {
		switch(type) {
			case 1: return '수산물';
			case 2: return '청과';
			case 3: return '야채';
		}
	};

	return (
		<div className="item">
			<div className={`img color${item.type}`}></div>
			<div className="info">
				<div className="top">
					<span className={`type border${item.type}`}>{transType(item.type)}</span>
					<span className="name">{item.name}</span>
				</div>
				<div className="price">{item.price}원</div>
			</div>
		</div>
	);
};

export default Item;