import React, { useState } from 'react';

const Segment = () => {
	const [menu, setMenu] = useState(1);
	return (
		<div style={{ width: '1000px', margin: '50px auto' }}>
			<ul style={{ display: 'flex' }}>
				<li className={menu === 1 ? 'activePage' : ''} onClick={() => setMenu(1)} style={{ fontSize: '20px', width: '100%', textAlign: 'center' }}>Menu1</li>
				<li className={menu === 2 ? 'activePage' : ''} onClick={() => setMenu(2)} style={{ fontSize: '20px', width: '100%', textAlign: 'center' }}>Menu2</li>
				<li className={menu === 3 ? 'activePage' : ''} onClick={() => setMenu(3)} style={{ fontSize: '20px', width: '100%', textAlign: 'center' }}>Menu3</li>
			</ul>
			<div>
				{menu === 1 && (
					<h1>메뉴1에 대한 내용</h1>
				)}
				{menu === 2 && (
					<h1>메뉴2에 대한 내용</h1>
				)}
				{menu === 3 && (
					<h1>메뉴3에 대한 내용</h1>
				)}
			</div>
		</div>
	);
};

export default Segment;