import React, { useState, useEffect } from 'react'
import CATEGORY from '../jsons/category.json';
import ITEMS from '../jsons/items.json';
import './List.css';
import Item from '../components/Item';


const List = () => {
    const [view, setView] = useState([]);
    const [onType, setOnType] = useState(0);
    const [isLoading, setLoading] = useState(true);
    const offLoading = () => {
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }

    const sortItem = (_id) =>{
        setOnType(_id);
        if(_id === 0){
            setView(ITEMS);
        }else{
            const sort = () => {
                ITEMS.filter(item =>{
                    return item.type === _id 
            })
            setView(sort);
        }
    }}
    
    useEffect(()=> {
        setLoading(true);
        offLoading();
    }, [onType])


    useEffect(()=> {
        setView(ITEMS);
    }, [])

    return(
        <div className="container">
            <ul className="haeder">
                {CATEGORY.map(item => (
                    <li 
                    className={`label${item.id === onType ? 'active' : ''}`} 
                    onClick={() => {sortItem(item.id)}}>
                    {item.label}
                    </li>
                ))}
            </ul>
            {isLoading ? (
                <div className="loading">Loading...</div>
            ): (
                <div className="items">
                    {view.map(item => {
                        <Item item={item}/>
                    })}
                </div>
            )}
        </div>
    );
};

export default List;