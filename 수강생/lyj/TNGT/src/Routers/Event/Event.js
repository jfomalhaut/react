import React from 'react';
import './Event.css';
import { EventItem, Footer } from '../../component';
import imageURI from './../../globals/imageURI';

const EVENT_ITEMS = [
    {id:1, name: 'TNGT 베스트셀러 #1', text: '2020/03/31 ~ 05/31', src: 'ex'},
    {id:2, name: 'TNGT 베스트셀러 #1', text: '2020/03/31 ~ 05/31', src: 'ex'},
    {id:3, name: 'TNGT 베스트셀러 #1', text: '2020/03/31 ~ 05/31', src: 'ex'},
    {id:4, name: 'TNGT 베스트셀러 #1', text: '2020/03/31 ~ 05/31', src: 'ex'},
    {id:5, name: 'TNGT 베스트셀러 #1', text: '2020/03/31 ~ 05/31', src: 'ex'},
    {id:6, name: 'TNGT 베스트셀러 #1', text: '2020/03/31 ~ 05/31', src: 'ex'}
];

const Event = () => {
    return (
        <div className="container">
            <button className="btn_up"></button>
            <div className="tit">
                <span>PROMOTION</span>
            </div>
            <div className="top_banner">
                <div className="banner_img_l">
                    <img src={`${imageURI['event1']}`}/>
                    <div className="ban_tit_l">
                        <span className="name_l">TNGT 7DAYS 스타일링</span>
                        <span className="dec_l">2020/04/01 ~ 04/10</span>
                    </div>
                </div>
                <div className="banner_img_r">
                    <img src={`${imageURI['event2']}`}/>
                    <div className="ban_tit_r">
                        <span className="name_r">[TNGT] 2020 수트 대전 기획</span>
                        <span className="dec_r">2020/04/01 ~ 04/30</span>
                    </div>
                </div>
            </div>
            <div className="bottom_banner">
                <div className="banner_boxes">
                    {EVENT_ITEMS.map((item, index) => (
                        <EventItem index={index} items={item} key={item.id} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Event;