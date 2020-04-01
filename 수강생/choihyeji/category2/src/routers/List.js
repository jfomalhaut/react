import React, { useState, useEffect } from 'react';
import './List.css';
import ITEMS from '../jsons/items.json';
import CATEGORY from '../jsons/category.json';
import Item from '../components/Item';

const List = ( { history, match : { params : { category } } } ) => {
    const [view, setView] = useState([]);
    const [onType, setOnType] = useState(0);
    const [isLoading, setLoading] = useState(true);

    console.log(category);

    const sortItem = (cate) => {
        let _id = 0;
        switch (cate) {
            case 'all': _id = 0; break;
            case 'fish': _id = 1; break;
            case 'fruit': _id = 2; break;
            case 'vegetable': _id = 3; break;
        }

        setOnType(_id);
        if (_id === 0) {
            setView(ITEMS);
        } else {
            const sort = ITEMS.filter(item => {
                return item.type === _id;
            });

            setView(sort);
        }
    };

    const navigate = value => {
        history.pushState(`/${value}`);
    };

    const offLoading = () => {
        setTimeout(() => {
            setLoading(false);
        },400);  
    };
    
    useEffect(() => {
        sortItem(category);
    },[category]);

    useEffect(() => {
        setLoading(true);
        offLoading();
    }, [onType]);

    return (
        <div className="container">
            <ul className="header">
                {CATEGORY.map(item => (
                    <li
                        className={`label ${onType === item.id ? 'active' : ''} `}
                        key={`CATEGORY${item.id}`}
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
                        <Item key={`ITEM${item.id}`} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default List;