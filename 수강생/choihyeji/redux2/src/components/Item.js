import React from 'react';
import { GoCheck } from 'react-icons/go';

const Item = ({ item: { name, price, src }, item, index, addCart }) => {
    return (
        <div className="item">
            <div className="img">
                <img src={item.src} />
            </div>
            <div className="info">
                <div className="name">{item.name}</div>
                <div className="price">{item.price}원</div>
                <button className="delete" onClick={() => onDelete(index)}>삭제</button>
                <button className="delete" onClick={() => addCart(item)}>담기</button>
            </div>
            <div className="checkbox">
                <span className={ item.check ? 'active' : '' } onClick={() => onCheck(index)}>
                    <GoCheck />
                </span>
            </div>
        </div>
    );
};

export default Item;