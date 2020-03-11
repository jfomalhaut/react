import React from 'react';

const Detail = ({ match }) => {
	return (
		<h1>{match.params.id}</h1>
	);
};

export default Detail;