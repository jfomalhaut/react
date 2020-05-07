import React, { useEffect, useState } from 'react';
import imageURI from '../globals/imageURI';

//key는 map 쓸 때만 쓰면 돼요.
const ShopItem = ({ history, index, item:{ id, src1, name, price, price2, sale }}) => {
    const [creatClass, setCreatClass] = useState("");

    const goItemPage = () => {
        history.push("ItemPage");
    }

    useEffect(() => {
        if (0 <= index && index < 7) {
            setCreatClass("none");
        } else {
            setCreatClass("type3");
        }
    }, []);
    
    return (
        <div className={`sItem ${creatClass}`} onClick={goItemPage}>
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
                    <div className="sale">{sale}</div>
                </div>
            </div>
        </div>
    );
};

export default ShopItem;