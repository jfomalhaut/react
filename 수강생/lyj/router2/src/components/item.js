import React from 'react'
import './item.css';
import imageURI from '../globals/imageURI';

const Item = ({ item: { id, name, src}, onClickHandler}) => {
    //    const sendIdDetail = () => {
    //        onClickHandler(id);
    //    };
    //    return (
    //        <div className="item" onClick={sendIdDetail}>
    //            {name}
    //        </div>
    //    )

        return (
            <img className="item" onClick={ () => onClickHandler(src)}>
                {src}
            </img>
        )
    };

export default Item;