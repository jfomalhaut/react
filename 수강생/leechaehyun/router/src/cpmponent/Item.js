import React from 'react';
import './Item.css';
import imageURI from '../globals/imageURI';

const Item  = ({ item: {id, name, src}, onClickHandler, onClickHandler2, onClickHandler3 }) => {
    // console.log(src);s
    return (
        <div className="item" onClick={ () => onClickHandler(id)} onClick={ () => onClickHandler2(name)} onClick={ () => onClickHandler3(src)}>
            {name}
            <img src={`${imageURI[src]}`} />
        </div>
    );

};

export default Item;
