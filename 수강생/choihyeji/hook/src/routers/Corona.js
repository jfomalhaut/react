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

    useEffect(() => {
        getDrugStore();
    }, [])

    return (
        <div className="container">
            {list.map(item => (
                <div className="drugStore">
                    <div>{item.type}</div>
                    <div>{item.name}</div>
                    <div>{item.addr}</div>
                    <div>{item.remain_stat}</div>
                </div>
            ))}
        </div>
    );
};

export default Corona;