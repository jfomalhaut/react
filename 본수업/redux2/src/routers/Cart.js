<<<<<<< HEAD
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
import Actions from '../actions';

const Cart = () => {
	const dispatch = useDispatch();
	// 구독
	const cart = useSelector(({ cartReducer }) => {
		return cartReducer.cart;
	});

	const removeAll = () => {
		dispatch(Actions.cartAction.removeAll());
	};

	const checkAll = () => {
		dispatch(Actions.cartAction.checkAll());
	};

	const removeCheck = () => {
		dispatch(Actions.cartAction.removeCheck());
	};

=======
import React, { useState } from 'react';
import CARTITEM from '../components/cartItem';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Actions from '../actions';


const Cart = () => {
	const dispatch = useDispatch ();
	// const [list, setList] = useState([]);
	// const [count, setCount] = useState(0);

	const checkAll = () =>{
		dispatch(Actions.cartAction.checkAll())
		
	}

	const removeCheck = () =>{
		dispatch(Actions.cartAction.removeCheck())
	}

	const removeAll = () =>{
		dispatch(Actions.cartAction.removeAll([]));
	}

	//구독
	const cart = useSelector(({cartReducer})=>{
		return cartReducer.cart;
	})
>>>>>>> 8aad0fb3326d97b34d7045804f42dd57a80fa8ab
	return (
		<div className="container">
			<div className="options">
				<button onClick={checkAll}>모두선택</button>
				<button onClick={removeAll}>모두삭제</button>
				<button onClick={removeCheck}>선택삭제</button>
			</div>
			<div className="list">
				{cart.map(item => (
<<<<<<< HEAD
					<CartItem key={`CARTITEM${item.id}`} item={item} />
=======
					<CARTITEM key={`CARTITEM${item.id}`} item={item}/>
>>>>>>> 8aad0fb3326d97b34d7045804f42dd57a80fa8ab
				))}
			</div>
		</div>
	);
};

export default Cart;