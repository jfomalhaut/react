import React, { useState, useEffect } from 'react';
import ITEMS from '../jsons/items.json';
import CATEGORY from '../jsons/category.json';
import './List.css';
import Item from '../components/Item';

const List2 = ({ history, match: { params: {category}} }) => {
    console.log(category);
	const [view, setView] = useState([]);
	const [onType, setOnType] = useState(0);
    const [isLoading, setLoading] = useState(true);

	const sortItem = (cate) => {
        let _id = 0;
        switch (cate) {
            case 'all': _id = 0; break;
            case 'fish': _id = 1; break;
            case 'fruit': _id = 2; break;
            case 'vagetable': _id = 3; break;
        }

		setOnType(_id);
		
		if (_id === 0) { // 전체보기
			setView(ITEMS);
		} else { // 1: 수산물, 2: 청과, 3: 야채
			const sort = ITEMS.filter(item => {
				return item.type === _id;
			});
			setView(sort);
		}
	};

    const navigate = value => {
        // console.log(value);
        history.push(`/${value}`);
    };

	const offLoading = () => {
		setTimeout(() => {
			setLoading(false);
		}, 400);
    };
    
    useEffect(() =>{
        // console.log(category);
        sortItem(category);
    }, [category]);

	useEffect(() => {
		setLoading(true);
		offLoading();
	}, [onType]);



	return (
		<div className="container">
			<ul className="header">
				{CATEGORY.map(item => (
					<li className={`label ${onType === item.id ? 'active' : ''}`} 
					key={`category${item.id}`} 
					onClick={() => navigate(item.path)}
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

export default List2;