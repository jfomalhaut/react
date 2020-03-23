import React, {useState, useEffect} from 'react';
import ITEMS from '../jsons/items.json';
import CATEGORY from '../jsons/category.json';
import './List.css';
import Item from '../components/Item.js';

const List = () =>{
    const [view, setView] = useState([]);
    const [onType, setOnType] = useState(0);
    const [isLoading, setLoading] = useState(true);

    const sortItem= (_id) => {
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

    const offLoading = () => {
        setTimeout(() => {
            setLoading(false);
        }, 400)
    };

    useEffect(() => {
        setLoading(true);
        offLoading();
    }, [onType]);

    useEffect(() => {
        setView(ITEMS);
        offLoading();
    }, []);

    return (
        <div className="container">
            <ul className="header">
                {CATEGORY.map(item => (
                    <li
                        className={`label ${ onType === item.id ? 'active' : ''}`}
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
                        <Item item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default List;
