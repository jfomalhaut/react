import React from 'react';
import imageURI from '../globals/imageURI';

//key는 map 쓸 때만 쓰면 돼요.
const ShopItem = ({ items:{ id, src1, name, price, price2, sale }}) => {
    return (
        <div className="shop_item">
            <span className="itme_num">{id}</span>
            <div className="item_img">
                <img src={imageURI[src1]} />
            </div>
            <div className="item_text">
                <div className="item_tit">
                    <span>{name}</span>
                </div>
                <div className="item_price">
                    <div className="item_sale">{price}</div>
                    <div className="item_pri">{price2}</div>
                    <div className="sale">24%{sale}</div>
                </div>
            </div>
        </div>
    );
};

export default ShopItem;