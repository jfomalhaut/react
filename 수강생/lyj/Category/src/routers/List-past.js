import React, { useState, useEffect } from 'react';
import ITEMS from '../jsons/items.json';
import CATEGORY from '../jsons/category.json';
import './List.css';


const List = () => {
    const [view, setView] = useState([]); //내용이 없는 view를 만듬
    const [onType, setOnType] = useState(0); //type0은 전체보기

    const sortItem = (_id) => {
        // console.log(_id);
        setOnType(_id); //눌러서 id값 불러오기
        if (_id === 0) { //전체보기
            setView(ITEMS);
        }else { //1수산물 2청과 3야채 만 보이도록 id값과 비교하여 같은것만 남기기
            const sort = ITEMS.filter(item => {
                return item.type === _id;
            });
            setView(sort);
        }
    };

    const transType = type => {
        switch(type){
            case 1: return '수산물';
            case 2: return '청과';
            case 3: return '야채';
        }
    }; //type 숫자를 글씨로 바꿈

    useEffect(() => {
        setView(ITEMS); //ITEMS의 내용을 넣은 view를 만듬
    }, []);

    return (
        <div className="container">
            <ul className="header">
                {CATEGORY.map(item => (
                    <li
                        className={`label ${ onType === item.id ? 'active' : '' }`} //onType과 id가 같으면 active발동 아니면 아무것도 아님
                        key={`category${item.id}`} //key의 category는 고유한 이름임 중복불가
                        onClick={() => sortItem(item.id)}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
            <div className="items">
                {view.map(item => (
                    <div className="item">
                        <div className={`img color${item.type}`}></div>
                        <div className="info">
                            <div className="top">
                                <span className={`type border${item.type}`}>{transType(item.type)}</span>
                                <span className="name">{item.name}</span>
                            </div>
                            <div className="price">{item.price}원</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;