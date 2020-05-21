import React, { useState, useEffect } from 'react'
import ITEMS from '../jsons/items.json';
import CATEGORY from '../jsons/category.json';
import './List.css';
import Item from '../components/Item';

const List2 = ({history, match : {params : {category}}}) => {
    const [ view, setView] = useState([]);
    const [onType, setOnType] = useState(0);
	const [isLoading, setLoading] = useState(true);

    const sortItem = (cate) => {
        let _id = 0;
        switch (cate) {
            case 'all' : _id = 0; break;
            case 'fish' : _id = 1; break;
            case 'fruit' : _id = 2; break;
            case 'vegetable' : _id = 3; break;
        }
        setOnType(_id);
        if(_id === 0){
            setView(ITEMS);
        }else{
            const sort = ITEMS.filter(item => {
                return item.type === _id;
            });
            setView(sort);
        }
    }
    
    const navigate = value =>{
        history.push(`/${value}`);
    }

    const offLoading = () => {
		setTimeout(() => {
			setLoading(false);
		}, 400);
    };
    
    useEffect(() => {
        sortItem(category)
    }, [category]);

    useEffect(() => {
        setLoading(true);
        offLoading();
    }, [onType]);

    return(
        <div className="container">
            <ul className="haeder">
                {CATEGORY.map(item => {
                    <li className={`label${item.id === onType ? 'active' : ''}`} key={`category${item.id}`} onClick={() => {navigate(item.path)}}>
                        {item.label}
                    </li>
                })}
            </ul>
            {isLoading ? (
				<div className="loading">Loading...</div>
			) : (
				<div className="items">
					{view.map(item => (
						<Item key={item.id} item={item} />
					))}
				</div>
			)}
        </div>
    );
};

export default  List2;