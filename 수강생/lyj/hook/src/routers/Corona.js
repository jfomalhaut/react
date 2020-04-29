import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const API = 'https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json';
const lat = 37.4981756;
const lng = 127.027728;

const Corona = () => {
    const [list, setList] = useState([]);

    const getDrugStore = () => {
        Axios.get(`${API}?lat=${lat}&lng=${lng}&m=500`).then(res => {
            const { data: { stores } } = res;
            setList(stores);
        }); //1000은 범위
    };

    const location = type => {
        // console.log(type);
        switch(type){
            case '01': return '약국'; //type은 문자열이므로 따옴표 안에 넣어줌
            case '02': return '우체국';
            case '03': return '농협';
            default : return '아무것도아님'; //default는 아무것도 아닐경우
        };
    };

    const numbers = _remain_stat => {
        console.log(_remain_stat);
        switch(_remain_stat){
            case 'plenty' : return '100개 이상';
            case 'some' : return '100개 ~ 30개';
            case 'few' : return '2개 ~ 30개';
            case 'empty' : return (
                <h1>하나도 없음</h1>
            ); //함수도 가능하다~
            case 'break' : return '판매 중지';
        };
    };

    useEffect(() => {
        getDrugStore();
    }, []);

    return (
        <div className="container">
            {list.map(item => (
                <div className="durgStore">
                    <div>{location(item.type)}</div>
                    <div>{item.name}</div>
                    <div>{item.addr}</div>
                    <div>{numbers(item.remain_stat)}</div>
                </div>
            ))}
        </div>
    );
};

export default Corona;