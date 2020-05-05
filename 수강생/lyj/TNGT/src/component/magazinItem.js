import React, { useEffect, useState } from 'react';
import { MagazinSmallitem } from '../component';
import imageURI from './../globals/imageURI';

const MAGAZIN_SMALL = [
    {id: 1, title: '제목입니다', text: 'tttext입니다 입니다 입니다', itemTitle1: '[BLACK] 컬러 배색 가디건 rkelrjs', src: 'magazine1', src2: 'ex'},
    {id: 2, title: '제목입니다', text: 'tttext입니다 입니다 입니다', itemTitle1: '[BLACK] 컬러 배색 가디건 rkelrjs', src: 'magazine2', src2: 'ex'},
    {id: 3, title: '제목입니다', text: 'tttext입니다 입니다 입니다', itemTitle1: '[BLACK] 컬러 배색 가디건 rkelrjs', src: 'magazine3', src2: 'ex'},
    {id: 4, title: '제목입니다', text: 'tttext입니다 입니다 입니다', itemTitle1: '[BLACK] 컬러 배색 가디건 rkelrjs', src: 'magazine4', src2: 'ex'}
];

const MagazinItem = ({ match, small, item:{ title, text, itemTitle1, src, src2, sub_items } }) => {
    const [ maItem, setMaItem ] = useState("");
    // const { params: { sub_items }} = match;

    useEffect (() => {
        if (sub_items === 4) {
            setMaItem("m_type1");
        } else if (sub_items === 3) {
            setMaItem("m_type2");
        } else {
            setMaItem("m_type3");
        };
    }, []);

    return (
        <div className="maga_item">
            <div className="maga_main">
                <img className="maga_img" src={imageURI[src]} />
                <div className="maga_title">
                    <span className="name">{title}</span>
                    <span className="dec">{text}</span>
                </div>
            </div>
            <div className="sub_item">
                <div className="maga_sub">
                    {MAGAZIN_SMALL.map((item, index) => (
                        <MagazinSmallitem maItem={maItem} index={index} item={item} key={`MAGAZINSMALL${item.id}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MagazinItem;