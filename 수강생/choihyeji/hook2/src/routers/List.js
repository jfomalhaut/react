import React, { useState, useEffect } from 'react';
import { GoCheck } from 'react-icons/go';
import ITEMS from '../jsons/fishes.json';
import './List.css';

const List = () => {
    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    const checkAll = () => {
        let after;
        if ( count === list.length) {
            after = list.map(item => ({...item, check: false}));
        } else {
            after = list.map(item => ({...item, check: true}));
        };
        setList(after);
    };

    const onCheck = _index => {
        const after = list.map((item, index) => 
            _index === index ? ({ ...item, check: !item.check}) : item
        );
        setList(after);
    };

    const removeCheck = () => {
        const after = list.filter(item => !item.check );
        setList(after);
    };

    const removeAll = () => {
        setList([]);
    };

    const onDelete = _index => {
        const after = list.filter((item, index) => _index !== index );
        setList(after);
    };

    useEffect(() => {
        const after = list.filter(item => item.check);
        const sum = after.reduce((acc, cur) => {
            acc = acc + cur.price;
            return acc;
        },0);
        setTotal(sum);
        setCount(after.length);
    }, [list]);
    
    useEffect(() => {
        setList(ITEMS);
    },[]);

    return (
        <div className="container">
            <h1>선택된 항목 수: <span className="count">{count}</span></h1>
            <h1>선택된 항목의 총액: <span className="total">{total}원</span></h1>
            <div className="options">
                <button onClick={checkAll}>전체선택</button>
                <button onClick={removeCheck}>선택삭제</button>
                <button onClick={removeAll}>전체삭제</button>
                <button>상품추가</button>
            </div>
            <div className="list">
                {list.map((item, index) => (
                    <div className="item">
                        <div className="img">
                            <img src={item.src} />
                        </div>
                        <div className="info">
                            <div className="name">{item.name}</div>
                            <div className="price">{item.price}원</div>
                            <button className="delete" onClick={() => onDelete(index)}>삭제</button>
                        </div>
                        <div className="checkbox">
                            <span className={ item.check ? 'active' : '' } onClick={() => onCheck(index)}>
                                <GoCheck />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;