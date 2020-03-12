import React from 'react';
// import './Item.css';

const Item = ({ id, name, onClickHandler }) => {

	const sendIdDetail = () => {
		onClickHandler(id);
	};

	return (
		<div className="item" onClick={sendIdDetail}>
			{name}
		</div>
	);
};

export default Item;