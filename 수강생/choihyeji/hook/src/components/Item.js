import React from 'react';
import { GoCheck } from 'react-icons/go';

const Item = ({ item: { name, price, src }}) => {
    return (
        <div className="item">
            <span className="icon">
                <GoCheck/>
            </span>
            <img src={src}/>
            <div className="info">
                <div className="name">{name}</div>
                <div className="price">{price}원</div>
            </div>
        </div>
    );
};

export default Item;