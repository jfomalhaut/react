import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
import Actions from '../actions';

const Cart = () => {
    // 구독
    const cart = useSelector(({ cartReducer }) => {
        return cartReducer.cart;
    });

    const dispatch = useDispatch();
    const checkAll = () => {
        dispatch(Actions.cartAction.checkAll());
    };

    const removeAll = () => {
        dispatch(Actions.cartAction.removeAll());
    };

    const removeCheck = () => {
        dispatch(Actions.cartAction.removeCheck());
    }

    return (
        <div clasSName="container">
            <div className="options">
                <button onClick={checkAll}>모두선택</button>
                <button onClick={removeAll}>모두삭제</button>
                <button onClick={removeCheck}>선택삭제</button>
            </div>
            <div className="list">
                {cart.map(item => (
                    <CartItem key={`CARTITEM${item.id}`} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Cart;