import React from 'react';
import { Footer, OutletItem } from '../../component';
import './Outlet.css';
import imageURI from './../../globals/imageURI';

const OUTLET_ITEMS = [
    {id: 1, name:'outlet item name', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 1},
    {id: 2, name:'outlet item name', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 2},
    {id: 3, name:'outlet item name', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 3},
    {id: 4, name:'outlet item name', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 4},
    {id: 5, name:'outlet item name', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 6, name:'outlet item name', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 1},
    {id: 7, name:'outlet item name', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 2},
    {id: 8, name:'outlet item name', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 3},
    {id: 9, name:'outlet item name', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 4},
    {id: 10, name:'outlet item name', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 11, name:'outlet item name', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 5},
    {id: 12, name:'outlet item name', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 1},
    {id: 13, name:'outlet item name', price: 1000, price2: 880, sale: '24%', src1: 'ex', type: 2}
];

const Outlet = () => {
    return (
        <div className="container">
            <button className="btn_up"></button>
            <div className="outlet_tit">
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
            <div className="outlet_all">
                <div className="outlet_all_top">
                    {OUTLET_ITEMS.map((item, index) => (
                        <OutletItem index={index} item={item} key={`OUTLETI${item.id}`}/>
                    ))}
                </div>
            </div>
           <Footer />
        </div>
    );
};

export default Outlet;