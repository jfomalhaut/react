import React, { useState } from 'react';
import CATEGORY from '../jsons/category.json';
import ITEMS from '../jsons/items.json';
import Item from '../components/Item';
import './List.css';

const List = ( { history, match: { params: { category }}}) => {
    const [view, setView] = useState([]);
    const [onType, setOnType] = useState(0);

    return (
        <div className="container">
            <ul className="header">
                {CATEGORY.map(item => (
                    <li
                        className={`label ${onType === item.id}`}
                        key={`category${item.id}`}
                        // onClick={() => navigate(item.path)}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
            <div className="items">
                <div classNem="item">
                    {ITEMS.map((item, index) => (
                        <Item key={`ITEM${item.id}`} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default List;