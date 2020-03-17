import React from 'react';
import './Item.css';
import imageURI from '../globals/imageURI';

const Item = ({ item: { id, name, src }, onClickHandler, onClickHandler2 }) => {

    // const sendIdDetail = () => {
    //     onClickHandler(id);
    // };
    return (
        <div>
            {/* <div className="item" onClick={() => onClickHandler(id)}>
                {name}
            </div> */}
            <div className="item" onClick={() => onClickHandler2(src)}>
                {name}
                <img src={`${imageURI[src]}`}/>
            </div>
        </div>
    );
};

export default Item;