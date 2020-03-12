import React from 'react'
import './Item.css';

const Item  = ({  id, name, onClickHandler, onClickHandler2 }) => {

    return (
        <div className="item" onClick={ () => onClickHandler(id)} onClick={ () => onClickHandler2(name)}>
            {name}
        </div>
    );

};

export default Item;
