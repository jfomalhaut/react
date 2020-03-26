import React, { useEffect, useState } from 'react';
import ITEMS from '../jsons/fishes.json';
import './List.css'
import {GoCheck} from 'react-icons/go';




const List = () => {
    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setList(ITEMS);
    },[]);

    const onCheck = idx =>{
        const after = list.map((item, index) => 
            idx === index ? ({...item, check: !item.check}):item
        );
        setList(after);
    }

    const checkAll = () =>{
        // const after = list.map(item=>({...item, check:true}));
        let after;
        if(count === list.length){//전체선택
             after =list.map(item => ({...item, check:false}));
        }else{
            after =list.map(item => ({...item, check:true}));
        }
        setList(after);
    }
    
    const removeCheck = () => {
        const after = list.filter(item => !item.check);
        setList(after);

    }
    const removeAll = () =>{
        setList([]);
    }

    const onDel = index =>{
        const after = list.filter((item, idx) => {
            return idx !== index
        })
        setList(after);
    }

    useEffect(()=>{
        const after = list.filter(item => item.check);
        const sum = after.reduce((acc, cur)=>{
        acc= acc+cur.price;
        return acc;
        },0);
        setTotal(sum);
        setCount(after.length);
    }, [list]);

    return(
        <div className="container">
            <h1>선택된 항목 수 : <span className="count">{count}</span></h1>
            <h1>선택된 상품의 총액 : <span className="count">{total}</span></h1>
            <div className="options">
                <button onClick={checkAll}>전체선택</button>
                <button onClick={removeCheck}>선택삭제</button>
                <button onClick={removeAll}>전체삭제</button>
                <button>상품추가</button>
            </div>
            <div className="list">
                {list.map((item, index)=>(
                    <div className="item">
                        <div className="img">
                            <img src={item.src}/>
                        </div>
                        <div className="info">
                            <div className="name">{item.name}</div>
                            <div className="price">{item.price}원</div>
                            <button className="delete" onClick={()=>onDel(index)}>삭제</button>
                        </div>
                    <div className="checkbox">
                        <span className={ item.check ? 'active' : ''} onClick={()=> onCheck(index)}>
                            <GoCheck/>
                        </span>
                    </div>
                    </div>
                ))}
            </div>
        </div>
        
    );
};

export default List;