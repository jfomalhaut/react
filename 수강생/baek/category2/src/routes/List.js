import React, { useState, useEffect } from 'react';
import ITEMS from '../jsons/items.json';
import CATEGORY from '../jsons/category.json';
import './List.css';
import Item from '../components/Item'

const List= () =>{
    const [view, setView] = useState([]);
    const [onType, setOnType] = useState(0);
    const [isLoading, setLoading] = useState(true);

    const sortItem = (_id) =>{
        setOnType(_id);
        if(_id === 0){
            setView(ITEMS);
        }else{
            const sort = ITEMS.filter(item =>{
                return item.id === _id
            });
            setView(sort);
        }
    };

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }, [onType]);

    useEffect(() => {
        setView(ITEMS);
    }, []);
    
    return (
        <div className ="container">
            <ul className="header">
                {CATEGORY.map(item =>(
                    <li 
                        className={`label ${onType === item.id ? 'active' : ''}`}
                        onClick = {() => sortItem(item.id)}
                    >
                    {item.label}
                    </li>
                ))}
            </ul>
            {isLoading ? (
                <div className="loading">Loading...</div>
            ) :(
                <div className="item">
                    {view.map(item =>(
                        <Item item={item}/>
                    ))}
                </div>
            )};
        </div>
    );
};

export default List;