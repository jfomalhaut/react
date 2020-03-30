import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const API = 'https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json';
const lat = 37.4981756;
const lng = 127.027728;

const Corona = () => {
    const [list, setList] = useState([]);

    const getDrugStore = () => {
        Axios.get(`${API}?lat=${lat}&lng=${lng}&m=500`).then(res => {
            console.log(res);
            const { data: { stores } } = res;
            setList(stores);
        });
    };

    const getType = _type => {
        switch(_type) {
            case '01': return "약국";
            case '02': return "우체국";
            case '03': return "농협";
        };
    };

    const getRemain_stat = _remain_stat => {
        switch(_remain_stat) {
            case 'plenty': return '100개 이상';
            case 'some': return '100개 ~ 30개';
            case 'few': return '2개 ~ 30개';
            case 'empty': return '1개 이하';
            // case 'empty': return (
            //     <h1>하나도 없음</h1>
            // ); 태그도 가능
            case 'break': return '판매종료';
        };
    };


    useEffect(() => {
        getDrugStore();
    }, [])

    return (
        <div className="container">
            {list.map(item => (
                <div className="drugStore">
                    <div>{getType(item.type)}</div>
                    <div>{item.name}</div>
                    <div>{item.addr}</div>
                    <div>{getRemain_stat(item.remain_stat)}</div>
                </div>
            ))}
        </div>
    );
};

export default Corona;