import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import imageURI from './../globals/imageURI';

const OutletItem = ({ index, item:{ id, src1, name, price, price2, sale }}) => {
    const [creatClass, setCreatClass] = useState("");

    useEffect(() => {
        if (0 <= index && index < 3) {
            setCreatClass("type1");
        } else if (3 <= index && index < 7) {
            setCreatClass("type2");
        } else {
            setCreatClass("type3");
        }

        // if (isAll) {
        //     if (0 <= index && index < 3) {
        //         setCreatClass("type1");
        //     } else if (3 <= index && index < 7) {
        //         setCreatClass("type2");
        //     } else {
        //         setCreatClass("type3");
        //     }
        // } else {
        //     if (0 <= index && index < 6) {
        //         setCreatClass("none_type1")
        //     } else {
        //         setCreatClass("none_type2")
        //     }
        // };
        
    }, []);

    return (
        <Link to={`/ItemPage/${id}`} className={`oItem ${creatClass}`}>
        <div>
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
    </Link>
    );
};

export default OutletItem;