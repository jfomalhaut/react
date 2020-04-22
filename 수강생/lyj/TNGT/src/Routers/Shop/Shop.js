import React from 'react';
import './Shop.css';
import { ShopItem, Footer } from '../../component';
import imageURI from '../../globals/imageURI';

const SHOP_ITEMS = [
    {id: 1, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: `${imageURI['ex']}`},
    {id: 2, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: `${imageURI['ex']}`},
    {id: 3, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: `${imageURI['ex']}`},
    {id: 4, name:'aaaaa', price: 1000, price2: 880, sale: '24%', src1: `${imageURI['ex']}`},
    // {id: 5, name:'dd', price: 1000, price2: 880, sale: '24%', src: 'item.jpg'},
    // {id: 6, name:'dd', price: 1000, price2: 880, sale: '24%', src: 'item.jpg'},
    // {id: 7, name:'dd', price: 1000, price2: 880, sale: '24%', src: 'item.jpg'}
];

const Shop = () => {
    return (
        <div className="container">
            <button className="btn_up"></button>
            <div className="tit">
                <span>BEST</span>
            </div>
            <div className="category">
                <div className="cate_left">
                    <span>ALL</span>
                    <span>OUTER</span>
                    <span>TOP</span>
                    <span>BOTTOM</span>
                    <span>ACC</span>
                    <span>SUIT</span>
                </div>
                <div className="cate_right">
                    <div className="cate_r_tit">
                        <span>최근 1일</span>
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
                    {SHOP_ITEMS.map((item, index) => (
                        <ShopItem index={index} items={item} key={`SHOPI${index}`} />
                    ))}
                </div>
            </div>
           <Footer />
        </div>
    );
};

export default Shop;