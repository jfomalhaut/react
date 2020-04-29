import React, { useEffect, useState } from 'react';
import ITEMS from '../jsons/fishes.json';
import './List.css';
import { GoCheck } from 'react-icons/go';
import Item from '../components/Item';
import Actions from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const List2 = () => {
    const dispatch = useDispatch();
    const [list, setList] = useState([]);
    const  [count, setCount] = useState(0);
    const  [total, setTotal] = useState(0);

    const cartLength = useSelector(({ cartReducer }) => {
        return cartReducer.cart.length;
    });

    const onCheck = _idx => {
        const after = list.map((item, index) =>
            _idx === index ? ({ ...item, check: !item.check }) : item
        );
        setList(after);
    };

    const checkAll = () => {
        // const after = list.map((item) => ({...item, check: false}));
        let after;
        if (count === list.length) { //리스트갯수와 카운터가 같으면(전체선택)
            after = list.map((item) => ({...item, check: false}));
        } else {
            after = list.map((item) => ({...item, check: true}));
        }
        setList(after);
    };

    const removeCheck = () => {
        const after = list.filter(item => item.check === false); //!item.check 와  === false는 같다
        setList(after);
    };

    const removeAll = () => {
        setList([]);
    };

    const onDelete = idx => {
        const after = list.filter((item, index) => idx !== index);
        setList(after);
    };

    useEffect(() => {
        const after = list.filter(item => item.check);
        const sum = after.reduce((acc, cur) => { //위에 after에서 선택아이템만 추려냈으므로 list가 아닌 after을 사용
            acc = acc + cur.price;
            return acc;
        },0);

        setTotal(sum);
        setCount(after.length);
    }, [list]);

    useEffect(() => { //처음 시작할때
        setList(ITEMS);
    }, []);

    const addCart = item => {
        // console.log(item);
        dispatch(Actions.cartAction.addCart(item));
    };


    return (
        <div className="container">
            <h1>선택된 항목 수: <span className="count">{count}</span> </h1>
            <h1>선택된 상품의 총액: <span className="count">{total}</span> </h1>
            <h1>장바구니 수: <span className="count">{cartLength}</span> </h1>
            <div className="options">
                <button onClick={checkAll}>전체선택</button>
                <button onClick={removeCheck}>선택삭제</button>
                <button onClick={removeAll}>전체삭제</button>
                <button>상품추가</button>
            </div>
            <div className="list">
                {list.map((item, index) => (
					<Item item={item} addCart={addCart} index={index} onDelete={onDelete} onCheck={onCheck} key={`ITEM${item.id}`} />
				))}
            </div>
        </div>
    );
};

export default List2;