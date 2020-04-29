import React, { useState } from 'react';

const Test = () => {
	const [value, setValue] = useState(0);

	return (
		<div>
			<h1>현재의 value : {value}</h1>
			<button onClick={() => setValue(0)}>value0</button>
			<button onClick={() => setValue(1)}>value1</button>
			<button onClick={() => setValue(2)}>value2</button>
			
			<div className="list">
				{value === 0 && (
					<div>
						<h1>화면0</h1>
					</div>
				)}
				{value === 1 && (
					<div>
						<h1>화면1</h1>
					</div>
				)}
				{value === 2 && (
					<div>
						<h1>화면2</h1>
					</div>
				)}
			</div>
		</div>
	);
};

export default Test;