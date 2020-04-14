import React from 'react';

const Address = ({ item: { name, tel }}) => {
	return (
		<div>
			<div>{name}</div>
			<div>{tel}</div>
		</div>
	);
};

export default Address;