import React, { useState, useEffect } from 'react';

const App = () => {
	const [data, setData] = useState(0);
	const [category, setCategory] = useState(0);

	const start = () => {
		setData(data + 1);
	};

	useEffect(() => {
		console.log('start');
	}, []);

	useEffect(() => {
		console.log('data값이 변경 되었습니다' + data);
	}, [data]);

	useEffect(() => {
		switch(category) {
			case 0 : console.log('전체보기'); break;
			case 1 : console.log('카테고리1'); break;
			case 2 : console.log('카테고리2'); break;
			case 3 : console.log('카테고리3'); break;
		}
	}, [category]);

	return (
		<div>
			<h1>{data}</h1>
			<button onClick={start}>btn</button>
			<button onClick={() => setCategory(0)}>전체보기</button>
			<button onClick={() => setCategory(1)}>흐물거리는</button>
			<button onClick={() => setCategory(2)}>등푸른</button>
			<button onClick={() => setCategory(3)}>갑각류</button>
		</div>
	);
};

export default App;