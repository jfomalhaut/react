import React, { useState, useEffect } from 'react';
import ITEMS from '../jsons/items.json';
import CATEGORY from '../jsons/category.json';
import './List.css';
import Item from '../components/item';

const List = () => {
    const [view, setView] = useState([]); //내용이 없는 view를 만듬
    const [onType, setOnType] = useState(0); //type0은 전체보기
    const [isLoading, setLoading] = useState(true);

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

    const offLoading = () => {
        setTimeout(() => {
            setLoading(false);
        }, 400);
    }; //0.4초마다 setLoading을 꺼주기

    useEffect(() => {
        setLoading(true); //type 바뀔때마다, 클릭할때마다 loading 작동
        offLoading();
    }, [onType]); //type이 바뀔때마다 꺼짐을 작동해라

    useEffect(() => {
        setView(ITEMS); //ITEMS의 내용을 넣은 view를 만듬
        offLoading(); //실행하자마자 꺼져라
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
            {isLoading ? (
                <div className="loading">Loading</div>
            ) : (
                <div className="items">
                    {view.map(item => (
                    <Item item={item} key={`item${item.id}`}/>
                    ))} 
                </div>
            )}
        </div>
    );
};

export default List;