import React from 'react';
import phoneNumber from '../pipes/phoneNumber';

const tel = '05175541132231232';

const Home = () => {
	return (
		<h1>{phoneNumber(tel)}</h1>
	);
};

export default Home;