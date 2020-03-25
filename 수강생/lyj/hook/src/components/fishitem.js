import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

const Fishitem = () => {
    return (
        <div className="items">
            <AiOutlineCheck/>
            <div className="img">
                <img src="https://img-cf.kurly.com/shop/data/goods/1584496590885l0.jpg"></img>
            </div>
            <div className="text">
                <div className="name">이름</div>
                <div className="price">원</div>
            </div>
        </div>
    );
};

export default Fishitem;