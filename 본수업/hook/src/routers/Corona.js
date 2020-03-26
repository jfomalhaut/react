import React, { useEffect, useState } from 'react';
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
		});
	};

	// remain_stat
	// plenty = 100개 이상
	// some = 100개 ~ 30개
	// few = 2개 ~ 30개
	// empty = 1개 이하
	// break = 판매중지

	// // type
	// 01 약국 02 우체국 03 농협

	const getType = _type => {
		switch(_type){
			case '01' : return '약국';
			case '02' : return '우체국';
			case '03' : return '농협';
			default: return '아무것도아님';
		}
	};

	const getRemain_stat = _remain_stat => {
		switch(_remain_stat) {
			case 'plenty' : return (
				<h1>아주많음</h1>
			);
			case 'some' : return '100개 ~ 30개';
			case 'few' : return '2개 ~ 30개';
			case 'empty' : return (
				<h1>하나도 없음</h1>
			);;
			case 'break' : return '판매종료';
		}
	};

	useEffect(() => {
		getDrugStore();
	}, []);

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