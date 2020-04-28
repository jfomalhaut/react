import React, { useState } from 'react';
import './Shop.css';
import { ShopItem, Footer } from '../../component';
import imageURI from './../../globals/imageURI';

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
    {id: 10, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5}
];
//SHOP_ITEMS는 변경안되는 전체값, sItem은 보여주기값 >> SHOP_ITEMS에서 필터줘서 sItem으로 보여지게 됨 sItem.map

const Shop = () => {
    const [sItem, setSItem] = useState(SHOP_ITEMS);

    const setMenu = val => {
        console.log(val);
        if (val === 0) {
            setSItem(SHOP_ITEMS);
            return;
        }
        const after = SHOP_ITEMS.filter(item => item.type === val);
        setSItem(after);
    };

    return (
        <div className="container">
            <button className="btn_up"></button>
            <div className="tit">
                <span>BEST</span>
            </div>
            <div className="category">
                <div className="cate_left">
                    <span onClick={() => setMenu(0)}>ALL</span>
                    <span onClick={() => setMenu(1)}>OUTER</span>
                    <span onClick={() => setMenu(2)}>TOP</span>
                    <span onClick={() => setMenu(3)}>BOTTOM</span>
                    <span onClick={() => setMenu(4)}>ACC</span>
                    <span onClick={() => setMenu(5)}>SUIT</span>
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
                        <ShopItem index={index} items={item} key={`SHOPI${item.id}`} />
                    ))}
                </div>
            </div>
           <Footer />
        </div>
    );
};

export default Shop;