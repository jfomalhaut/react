import React, { useState } from 'react';
import Address from '../components/Address';

const STORES = [
	{id: 1, name: '신도림점', tel: '02-3332-4441'},
	{id: 2, name: '용답점', tel: '02-3332-4442'},
	{id: 3, name: '왕십리점', tel: '02-3332-4443'},
	{id: 4, name: '잠실점', tel: '02-3332-4444'}
];

const Tab = () => {
	const [view, setView] = useState(1);

	const setMenu = val => {
		setView(val);
	};

	return (
		<div>
			<ul className="segment">
				<li className={view === 1 ? 'activeMenu' : 'default'} onClick={() => setMenu(1)}>배달주문</li>
				<li className={view === 2 ? 'activeMenu' : 'default'} onClick={() => setMenu(2)}>포장주문</li>
			</ul>
			<div className="view">
				{view === 1 ? (
					<div>
						{STORES.map(item => (
							<Address item={item} />
						))}
					</div>
				) : (
					<h1>포장주문에 대한 내용</h1>
				)}
			</div>
		</div>
	);
};

export default Tab;