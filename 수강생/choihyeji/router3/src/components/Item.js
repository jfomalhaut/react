import React from 'react';
import './Item';
import imageURI from '../globals/imageURI';

const Item = ( { item: { id, name, src }, onClickHandler , onClickHandler2}) => {
    return (
        // <div className="item" onClick={() => onClickHandler(id)}>
        //     {name}
        // </div>
        <div className="item" onClick={() => onClickHandler2(src)}>
            {name}
            <img src={`${imageURI[src]}`} />
        </div>
    );
};

export default Item;