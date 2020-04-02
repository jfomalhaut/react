import React from 'react';
import { GoCheck } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import Actions from '../actions';
// dispatch 는 값을 보낼 때 사용
// selector 는 구독할 때 사용
const nf = new Intl.NumberFormat();

// && : 앞에 있는 조건이 맞으면 뒤에 있는 게 실행된다 ( else가 없는 상태 )
const CartItem = ({ item: { id, name, price, src, check, count }}) => {

    const dispatch = useDispatch();
    const onDelete = () => {
        dispatch(Actions.cartAction.removeCart(id));
    };

    const onCheck = () => {
        dispatch(Actions.cartAction.onCheck(id));
    };

    return (
        <div className="item">
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