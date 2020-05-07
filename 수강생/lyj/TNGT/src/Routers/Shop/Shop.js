import React, { useState, useEffect } from 'react';
import './Shop.css';
import { ShopItem, Footer, ShopItemDown } from '../../component';
import imageURI from './../../globals/imageURI';
// const ADD = 18;
// const INITIAL_VALUE = 25;

const SHOP_ITEMS = [ //상수:변경안됨
    {id: 1, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 1},
    {id: 2, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 2},
    {id: 3, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 3},
    {id: 4, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 4},
    {id: 5, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 6, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 1},
    {id: 7, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 1},
    {id: 8, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 1},
    {id: 9, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 1},
    {id: 10, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 11, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 12, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 13, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 14, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 15, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 16, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 17, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 18, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 19, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 20, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 21, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 22, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 23, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 24, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 25, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 26, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 27, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 28, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 29, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 30, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5}
];
//SHOP_ITEMS는 변경안되는 전체값, sItem은 보여주기값 >> SHOP_ITEMS에서 필터줘서 sItem으로 보여지게 됨 sItem.map

const Shop = ({ history, match }) => {
    const [sItem, setSItem] = useState([]);
    const { params: { type } } = match;

    const setMenu = val => {
        history.push(`/shop/${val}`);
    };

    const transType = type => {
        switch (type) {
            case 'all' : return 0;
            case 'outer' : return 1;
            case 'top' : return 2;
            case 'bottom' : return 3;
            case 'acc' : return 4;
            case 'suit' : return 5;
        }
    };

    useEffect(() => {
        const val = transType(type);
       
        if (val === 0) {
            setSItem(SHOP_ITEMS);
            return;
        }
        const after = SHOP_ITEMS.filter(item => item.type === val);
        setSItem(after);
    }, [type]);

    useEffect(() => {
        console.log(sItem);
    }, [sItem]);

    return (
        <div className="container">
            <button className="btn_up"></button>
            <div className="shop_tit">
                <span>BEST</span>
            </div>
            <div className="category">
                <div className="cate_left">
                    <span onClick={() => setMenu('all')}>ALL</span>
                    <span onClick={() => setMenu('outer')}>OUTER</span>
                    <span onClick={() => setMenu('top')}>TOP</span>
                    <span onClick={() => setMenu('bottom')}>BOTTOM</span>
                    <span onClick={() => setMenu('acc')}>ACC</span>
                    <span onClick={() => setMenu('suit')}>SUIT</span>
                </div>
                <div className="cate_right">
                    <div className="cate_r_tit">
                        <span>최근 1일</span>
                        <img className="cate_img" src={`${imageURI['cate']}`} />
                    </div>
                    <ul className="cate_r_nav">
                        <li>최근 1일</li>
                        <li>최근 1주일</li>
                        <li>최근 1달</li>
                    </ul>
                </div>
            </div>
            <div className="shop_all">
                <div className="all_top">
                    {sItem.map((item, index) => (
                        <ShopItem category={type} index={index} item={item} key={`SHOPI${item.id}`}/>
                    ))}
                </div>
            </div>
           <Footer />
        </div>
    );
};

export default Shop;