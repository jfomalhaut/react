import React, { useState, useEffect } from 'react';
import ITEMS from '../jsons/fishes.json';
import Item from '../components/Item';
// import './List.css';

const List = () => {
    console.log(ITEMS);
    const [view, setView] = useState([]);

    useEffect(() => {
        setView(ITEMS);
    },[])

    
    return (
        <div className="container">
            {ITEMS.map((item, index) => (
                <Item item={item} key={`ITEM${item.id}`}/>
            ))}
        </div>
    );
};

export default List;