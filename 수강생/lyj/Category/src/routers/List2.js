import React, { useState, useEffect } from 'react';
import ITEMS from '../jsons/items.json';
import CATEGORY from '../jsons/category.json';
import './List.css';
import Item from '../components/item';

const List2 = ({ history, match: { params: { category }} }) => {
    console.log(category); //주소 뒤에 추가 주소를 꺼내보기
    const [view, setView] = useState([]); //내용이 없는 view를 만듬
    const [onType, setOnType] = useState(0); //type0은 전체보기
    const [isLoading, setLoading] = useState(true);

    const sortItem = (cate) => {
        let _id = 0;
        switch (cate) {
            case 'all': _id = 0; break;
            case 'fish': _id = 1; break;
            case 'fruit': _id = 2; break;
            case 'vegetable': _id = 3; break;
        }

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

    const navigate = value => {
        history.push(`/${value}`); //history는 페이지 넘길때 사용
    }

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

    //useEffect는 처음 작동, 계속감시하는 작동이 필요할때 쓰기
    useEffect(() => {
        sortItem(category);
    }, [category]); 

    useEffect(() => {
        setLoading(true); //type 바뀔때마다, 클릭할때마다 loading 작동
        offLoading(); //실행하자마자 꺼져라
    }, [onType]); //type이 바뀔때마다 꺼짐을 작동해라

    useEffect(() => {
        // setView(ITEMS); //ITEMS의 내용을 넣은 view를 만듬 => 처음 작동할때 전체페이지 보여주는건데 sortitem(cate)가 처음부터 작동하므로 없어도 됨
    }, []);

    return (
        <div className="container">
            <ul className="header">
                {CATEGORY.map(item => (
                    <li
                        className={`label ${ onType === item.id ? 'active' : '' }`} //onType과 id가 같으면 active발동 아니면 아무것도 아님
                        key={`category${item.id}`} //key의 category는 고유한 이름임 중복불가
                        onClick={() => navigate(item.path)}
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

export default List2;