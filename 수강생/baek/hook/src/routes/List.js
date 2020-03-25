import React, { useEffect, useState } from 'react';
import ITEMS from '../jsons/fishes.json';
import './List.css'
import {GoCheck} from 'react-icons/go';




const List = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(ITEMS);
    },[]);


    return(
        <div className="container">
            <h1>선택된 항목 수 : <span className="count">123</span></h1>
            <h1>선택된 상품의 총액 : <span className="count">20,000원</span></h1>
            <div className="options">
                <button>전체선택</button>
                <button>선택삭제</button>
                <button>전체삭제</button>
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
                            <div className="delete">삭제</div>
                        </div>
                    <div className="checkbox">
                        <span className="">
                            <GoCheck/>>
                        </span>
                    </div>
                    </div>
                ))}
            </div>
        </div>
        
    );
};

export default List;