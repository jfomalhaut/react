import React from 'react';

const Detail2 = ({ match }) => {
	return (
		<div>{match.params.name2}</div>
	);
};

export default Detail2;