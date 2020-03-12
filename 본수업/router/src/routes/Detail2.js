import React from 'react';
import imageURI from '../globals/imageURI';

const Detail2 = ({ match }) => {
	const {
		params: {
			src
		}
	} = match;

	return (
		<img src={`${imageURI[src]}`} />
	);
};

export default Detail2;