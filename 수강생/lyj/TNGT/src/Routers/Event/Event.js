import React from 'react';
import './Event.css';
import { EventItem, Footer } from '../../component';
import imageURI from './../../globals/imageURI';

const EVENT_ITEMS = [
    {id:1, name: 'S;GNAL 20SS 셔츠컬렉션', text: '2020/04/14 ~ 04/15', src: 'event1'},
    {id:2, name: 'TNGT 7DAYS 스타일링', text: '2020/04/02 ~ 04/31', src: 'event2'},
    {id:3, name: '[TNGT]20SS 수트 대전 기획전', text: '2020/03/04 ~ 03/21', src: 'event3'},
    {id:4, name: 'TNGT 베스트셀러 #1', text: '2020/03/31 ~ 05/31', src: 'event4'},
    {id:5, name: 'TNGT CLEARANCE', text: '2020/03/10 ~ 03/31', src: 'event5'},
    {id:6, name: '3월의 인플루언서', text: '2020/02/26 ~ 03/01', src: 'event6'},
    {id:7, name: '20SS TNGT S;GNAL', text: '2020/02/19 ~ 05/31', src: 'event7'},
    {id:8, name: '아올렛 수트 모아보기', text: '2019/08/07 ~ 08/27', src: 'event8'},
    {id:9, name: '19FW 화보출시기념 박보검 3행시 이벤트', text: '2019/07/31 ~ 07/31', src: 'event9'},
    {id:10, name: 'TNGT Monthly Signal 6월의 추천 ITEM', text: '2019/06/10 ~ 06/11', src: 'event10'}
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
                    <img src={`${imageURI['eventmain1']}`}/>
                    <div className="ban_tit_l">
                        <span className="name_l">TNGT 7DAYS 스타일링</span>
                        <span className="dec_l">2020/04/01 ~ 04/10</span>
                    </div>
                </div>
                <div className="banner_img_r">
                    <img src={`${imageURI['eventmain2']}`}/>
                    <div className="ban_tit_r">
                        <span className="name_r">[TNGT] 2020 수트 대전 기획</span>
                        <span className="dec_r">2020/04/01 ~ 04/30</span>
                    </div>
                </div>
            </div>
            <div className="bottom_banner">
                <div className="banner_boxes">
                    {EVENT_ITEMS.map((item, index) => (
                        <EventItem index={index} item={item} key={item.id} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Event;