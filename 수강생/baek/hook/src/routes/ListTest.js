import React, { useState, useEffect } from 'react'
import { GoCheck } from 'react-icons/go';
import ITEMS from '../jsons/fishes.json';
import './List.css'


const ListTest = () => {
    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);


    useEffect(() =>{
        setList(ITEMS);
    },[]);

    const onCheck = idx =>{
        const after = list.map((item, index)=>
        idx === index ? ({...item, check : !item.check}):item
        );
        setList(after); 
    }


    const checkAll = () => {
        const flag = count === list.length ? false:true;
        const after = list.map(item => ({...item, check : flag}));
        setList(after);
    }

    const removeCheck = () => {
        const after = list.filter(item => !item.check);
        setList(after);
    }

    const removeAll = () =>{
        setList([]);
    };

    const onDel = index => {
        const next = list.filter((item, idx) => {
            return index !== idx;
        });
        setList(next);
    };

    useEffect(() =>{
        const after = list.filter(item => item.check);
        const sum = after.reduce((acc,cur) => {
            acc = acc+cur.price;
            return acc;
        },0);
        setTotal(sum);
        setCount(after.length);
    },[list]);
                
    return(
        <div className="conatainer">
            <h1>선택된 항목 수 : {count}</h1>
            <h1>선택된 상품의 합계 : {total}</h1>
            <div className ="options">
                <button onClick={checkAll}>전체선택</button>
                <button onClick={removeCheck}>선택삭제</button>
                <button onClick={removeAll}>전체삭제</button>
                <button>상품추가</button>
            </div>
            <div className="list">
                {list.map((item, index) => (
                    <div className="item">
                        <div className="img">
                            <img src={item.src}/>
                        </div>
                        <div className="info">
                            <div className="name">{item.name}</div>
                            <div className="price">{item.price}</div>
                            <button onClick={() => onDel(index)} className="delete">삭제</button>
                        </div>
                    <div  className="checkbox">
                        <span className={item.check ? 'active': ''} onClick={() => onCheck(index)}>
                            <GoCheck/>
                        </span>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListTest;