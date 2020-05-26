import React from 'react';
import ITEMS from '../jsons/items.json';

const Item = ({ item }) => {
    return (
       <div className="item">
           <div className="item">
                <div className={`img color${item.type}`}></div>
                <div className="info">
                    <div className="top">
                        <div className={`type border${item.type}`}></div>
                        <div className="name">{item.name}</div>
                    </div>
                    <div className="price">{item.price}원</div>
                </div>
            </div>
       </div>
    );
};

export default Item;