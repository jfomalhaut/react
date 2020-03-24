import React, { useState, useEffect } from 'react';
import Items from '../jsons/fishes.json';
import { AiOutlineCheck } from 'react-icons/ai';
import Fishitem from '../components/fishitem';
import './List.css';

const List = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        setItem(Items);
    }, []);

    return (
        <div className="container">
            {item.map(_item => (
                <div key={`items${_item.id}`} className="items">
                    <AiOutlineCheck/>
                    <div className="img">
                        <img src={_item.src}></img>
                    </div>
                    <div className="text">
                        <div className="name">이름 : {_item.name}</div>
                        <div className="price">{_item.price} 원</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default List;