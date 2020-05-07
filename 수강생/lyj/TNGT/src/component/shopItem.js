import React, { useEffect, useState } from 'react';
import imageURI from '../globals/imageURI';
import { Link } from 'react-router-dom';

//key는 map 쓸 때만 쓰면 돼요.
const ShopItem = ({ category, history, index, item:{ id, src1, name, price, price2, sale, type }}) => {
    const [creatClass, setCreatClass] = useState("");

    useEffect(() => {
        if (category === 'all') {
            if (0 <= index && index < 3) {
                setCreatClass("type1");
            } else if (3 <= index && index < 7) {
                setCreatClass("type2");
            } else {
                setCreatClass("type3");
            }
        } else {
            if (0 <= index && index < 6) {
                setCreatClass("none_type1")
            } else {
                setCreatClass("none_type2")
            }
        };
        
    }, []);
    
    return (
        <Link to={`/ItemPage/${id}`} className={`sItem ${creatClass}`}>
            <div>
                <span className="itme_num">{(index+1)}</span>
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

        </Link>
    );
};

export default ShopItem;