import React from 'react'

const ShopItem = ({ item:{ id, src1, name, price, price2, sale } }) => {
    return (
        <div className="shop_item">
            <span className="itme_num">1{id}</span>
            <div className="item_img">
                <img>{src1}</img>
            </div>
            <div className="item_text">
                <div className="item_tit">
                    <span>[BLACK] 천연 양가죽 라이더자켓{name}</span>
                </div>
                <div className="item_price">
                    <div className="item_sale">227,400{price}</div>
                    <div className="item_pri">299,000{price2}</div>
                    <div className="sale">24%{sale}</div>
                </div>
            </div>
        </div>
    );
};

export default ShopItem;