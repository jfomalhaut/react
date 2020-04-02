import React, { useState, useEffect } from 'react';
import ITEMS from '../jsons/fishes.json';
import Item from '../components/Item';
import './List.css';
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../actions';

const nf = new Intl.NumberFormat();

const List = () => {
	const dispatch = useDispatch();
	const [list, setList] = useState([]);
	const [count, setCount] = useState(0);
	const [total, setTotal] = useState(0);

	const cartLength = useSelector(({ cartReducer }) => {
		return cartReducer.cart.length;
	});

	const onCheck = idx => {
		const after = list.map((item, index) => 
			idx === index ? ({ ...item, check: !item.check }) : item
		);
		setList(after);
	};

	const checkAll = () => {
		let after;
		if (list.length === count) {
			after = list.map(item => ({...item, check: false}));
		} else {
			after = list.map(item => ({...item, check: true}));
		}
		setList(after);
	};

	const removeCheck = () => {
		const after = list.filter(item => !item.check);
		setList(after);
	};

	const removeAll = () => {
		setList([]);
	};

	const onDelete = idx => {
		const after = list.filter((item, index) => index !== idx);
		setList(after);
	};

	const addItems = () => {
		setList(ITEMS);
	};

	useEffect(() => {
		const ct = list.filter(item => item.check).length;
		const sum = list.reduce((acc, cur) => {
			acc = acc + (cur.check ? cur.price : 0);
			return acc;
		}, 0);
		setCount(ct);
		setTotal(sum);
	}, [list]);

	useEffect(() => {
		setList(ITEMS);
	}, []);

	const addCart = item => {
		dispatch(Actions.cartAction.addCart(item));
	};

	return (
		<div className="container">
<<<<<<< HEAD
			{/* <h1>선택된 항목 수 : <span className="count">{count}</span></h1>
			<h1>선택된 상품의 총액 : <span className="count">{nf.format(total)}원</span></h1>
			<h1>장바구니 수 : <span className="count">{cartLength}</span></h1> */}
=======
>>>>>>> 8aad0fb3326d97b34d7045804f42dd57a80fa8ab
			<div className="options">
				<button onClick={checkAll}>전체선택</button>
				<button onClick={removeCheck}>선택삭제</button>
				<button onClick={removeAll}>전체삭제</button>
				<button onClick={addItems}>상품추가</button>
			</div>
			<div className="list">
				{list.map((item, index) => (
					<Item item={item} addCart={addCart} index={index} onDelete={onDelete} onCheck={onCheck} key={`ITEM${item.id}`} />
				))}
			</div>
		</div>
	);
};

export default List;