import React, { useState, useEffect } from 'react';
import ITEMS from '../jsons/items.json';
import CATEGORY from '../jsons/category.json';
import './List.css';
import Item from '../components/Item';

const List = () => {
	const [view, setView] = useState([]);
	const [onType, setOnType] = useState(0);
	const [isLoading, setLoading] = useState(true);

	const sortItem = (_id) => {
		setOnType(_id);
		setLoading(true);
		if (_id === 0) { // 전체보기
			setView(ITEMS);
		} else { // 1: 수산물, 2: 청과, 3: 야채
			const sort = ITEMS.filter(item => {
				return item.type === _id;
			});
			setView(sort);
		}
	};

	// const transType = type => {
    //     switch(type){
    //         case 1: return '수산물';
    //         case 2: return '청과';
    //         case 3: return '야채';
    //     }
    // }; 

	const offLoading = () => {
		setTimeout(() => {
			setLoading(false);
		}, 400);
	};

	useEffect(() => {
		offLoading();
	}, [onType]);

	useEffect(() => {
		setView(ITEMS);
		// offLoading();
	}, []);

	return (
		<div className="container">
			<ul className="header">
				{CATEGORY.map(item => (
					<li className={`label ${onType === item.id ? 'active' : ''}`} 
					key={`category${item.id}`} 
					onClick={() => sortItem(item.id)}
					>
						{item.label}
					</li>
				))}
			</ul>
			{isLoading ? (
				<div className="loading">Loading...</div>
			) : (
				<div className="items">
					{view.map(item => (
						<Item item={item} key={`item${item.id}`}/>
					))}
				</div>
			)};
		</div>
	);
};

export default List;