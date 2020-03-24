import React from 'react';
import { AiOutlineCheck } from "react-icons/ai";

const Detail = ({index ,item:{src, name, price}}) => {
    return (
        <div className="Detail" key={`Detail${index}`}>
            <div className="checkBox">
                <span>
                    <AiOutlineCheck/>
                </span>
            </div>
            <div className="imgBox">
                <img src={src}/>
            </div>
            <div className="imgTxt">
                <div className="name">{name}</div>
                <div className="price">{price}원</div>
            </div>
        </div>
    );
};
export default Detail;