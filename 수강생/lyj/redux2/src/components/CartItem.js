import React from 'react';
import { GoCheck } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import Actions from '../actions';

//리스트와 장바구니의 Item이랑 기능이 달라서 새로 만듬

const nf = new Intl.NumberFormat(); //숫자 콤마찍어주는거

const CartItem = ({ item: { id, name, src, price, check, count } }) => { //item나열방식을 하면 {item.id}라고 안하고 {id}라고 쓰면됨

    const dispatch = useDispatch(); //값을 받을때 dispatch 값을보낼때 유스셀렉터 useSeletor
    const onDelete = () => {
        dispatch(Actions.cartAction.removeCart(id));
    };

    const onCheck = () => {
        dispatch(Actions.cartAction.onCheck(id));
    };

    return (
        <div className="item" key={`fishes${id}`}>
            <div className="img">
                <img src={src} />
            </div>
            <div className="info">
                <div className="name">{name}</div>
                <div className="price">{nf.format(price * count)}원</div>
                <div className="count">
                    {count}개 {count > 1 && <span className="pricePerCount">1개당 {nf.format(price)}원</span>}
                </div>
                <button className="delete" onClick={onDelete}>삭제</button>
            </div>
            <div className="checkbox">
                <span className={ check ? 'active' : '' } onClick={onCheck}>
                    <GoCheck />
                </span>
            </div>
        </div>
    );
};

export default CartItem;

//<Item item={item} addCart={addCart} index={index}