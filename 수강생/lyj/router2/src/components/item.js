import React from 'react'
import './item.css';

const Item = ({ item: { id, name, src}, onClickHandler}) => {
        return (
            <div className="item" onClick={ () => onClickHandler(name)}>
                {name}
            </div>
        )
};

export default Item;