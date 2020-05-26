import React from 'react';

const Navi = ({ list }) => {
	return (
		<ul>
			{list.map(item => (
				<li>{item.label}</li>
			))}
		</ul>
	);
};

export default Navi;