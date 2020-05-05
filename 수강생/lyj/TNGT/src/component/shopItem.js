import React, { useEffect, useState } from 'react';
import imageURI from '../globals/imageURI';

//key는 map 쓸 때만 쓰면 돼요.
const ShopItem = ({ isAll, history, index, item:{ id, src1, name, price, price2, sale }}) => {
    const [creatClass, setCreatClass] = useState("");

    // const test = () => {
    //     history.push("about");
    // }
    //about으로 page이동

    const transType = type => {
        let val = 0;
        switch (type) {
            case 'all' : return '0'; break;
            case 'outer' : return '1'; break;
            case 'top' : return '2'; break;
            case 'bottom' : return '3'; break;
            case 'acc' : return '4'; break;
            case 'suit' : return '5'; break;
        }
    };

    useEffect(() => {
        if (isAll) {
            if (0 <= index && index < 3) {
                setCreatClass("type1");
            } else if (3 <= index && index < 7) {
                setCreatClass("type2");
            } else {
                setCreatClass("none");
            }
        } else {
            setCreatClass("type3");
        }
    }, []);
    
    return (
        <div className={`sItem ${creatClass}`}>
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