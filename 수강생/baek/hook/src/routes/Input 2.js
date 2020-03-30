import React, { useState, useEffect } from 'react'
import Axios from 'axios';
const API = "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json"
const lat = 37.498175;
const lng = 127.027728;


const Input2 = () =>{
    const [list, setList] = useState([]);
    const getDrugStore = ()=>{
        Axios.get(`${API}?lat=${lat}&lng=${lng}&m=500`).then(res=>{
            console.log(res);
            const {data : {stores}} = res;
            console.log(stores);
            setList(stores);
        })
    }
    const transType = type => {
        switch (type) {
            case "01" : return '약국';
            case "02" : return '우체국';
            case "03" : return '농협';
        }
    };

    const remain_stat = re_stat => {
        switch(re_stat) {
            case 'planty' :return '100개 이상';
            case 'some' : return '100개~30개';
            case 'few' : return '2개~3개';
            case 'empty' : return '재고없음';
            case 'break' : return '판매종료'; 
        }
    }


    useEffect(() =>{
        getDrugStore()
    },[])

    return(
        <div className="container">
            {list.map(item =>(
                <div className="drugStore">
                    <div>{item.name}</div>
                    <div>{item.addr}</div>
                    <div>{transType(item.type)}</div>
                    <div>{remain_stat(item.remain_stat)}</div>
                </div>
            ))}
        </div>
    );
};

export default Input2;