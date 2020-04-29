import React, { useEffect, useState } from 'react';
import './Pagination.css';

const ITEMS = [
	{
		"id": 1,
		"name": "고등어",
		"price": 2000,
		"type": 1,
		"best": true
	},
	{
		"id": 2,
		"name": "삼치",
		"price": 2100,
		"type": 1,
		"best": true
	},
	{
		"id": 3,
		"name": "가자미",
		"price": 2200,
		"type": 1,
		"best": false
	},
	{
		"id": 4,
		"name": "고래",
		"price": 2300,
		"type": 1,
		"best": true
	},
	{
		"id": 5,
		"name": "꼬막",
		"price": 2400,
		"type": 1,
		"best": false
	},
	{
		"id": 6,
		"name": "사과",
		"price": 3000,
		"type": 2,
		"best": false
	},
	{
		"id": 7,
		"name": "키위",
		"price": 3100,
		"type": 2,
		"best": true
	},
	{
		"id": 8,
		"name": "딸기",
		"price": 3200,
		"type": 2,
		"best": true
	},
	{
		"id": 9,
		"name": "수박",
		"price": 3300,
		"type": 2,
		"best": false
	},
	{
		"id": 10,
		"name": "참외",
		"price": 3400,
		"type": 2,
		"best": true
	},
	{
		"id": 11,
		"name": "미나리",
		"price": 4000,
		"type": 3,
		"best": true
	},
	{
		"id": 12,
		"name": "고사리",
		"price": 4100,
		"type": 3,
		"best": false
	},
	{
		"id": 13,
		"name": "상추",
		"price": 4200,
		"type": 3,
		"best": true
	},
	{
		"id": 14,
		"name": "깻잎",
		"price": 4300,
		"type": 3,
		"best": true
	},
	{
		"id": 15,
		"name": "오이고추",
		"price": 4400,
		"type": 3,
		"best": false
	},
	{
		"id": 7,
		"name": "키위",
		"price": 3100,
		"type": 2,
		"best": true
	},
	{
		"id": 8,
		"name": "딸기",
		"price": 3200,
		"type": 2,
		"best": true
	},
	{
		"id": 9,
		"name": "수박",
		"price": 3300,
		"type": 2,
		"best": false
	},
	{
		"id": 10,
		"name": "참외",
		"price": 3400,
		"type": 2,
		"best": true
	},
	{
		"id": 11,
		"name": "미나리",
		"price": 4000,
		"type": 3,
		"best": true
	},
	{
		"id": 12,
		"name": "고사리",
		"price": 4100,
		"type": 3,
		"best": false
	},
	{
		"id": 13,
		"name": "상추",
		"price": 4200,
		"type": 3,
		"best": true
	},
	{
		"id": 14,
		"name": "깻잎",
		"price": 4300,
		"type": 3,
		"best": true
	},
	{
		"id": 15,
		"name": "오이고추",
		"price": 4400,
		"type": 3,
		"best": false
	},
	{
		"id": 7,
		"name": "키위",
		"price": 3100,
		"type": 2,
		"best": true
	},
	{
		"id": 8,
		"name": "딸기",
		"price": 3200,
		"type": 2,
		"best": true
	},
	{
		"id": 9,
		"name": "수박",
		"price": 3300,
		"type": 2,
		"best": false
	},
	{
		"id": 10,
		"name": "참외",
		"price": 3400,
		"type": 2,
		"best": true
	},
	{
		"id": 11,
		"name": "미나리",
		"price": 4000,
		"type": 3,
		"best": true
	},
	{
		"id": 12,
		"name": "고사리",
		"price": 4100,
		"type": 3,
		"best": false
	},
	{
		"id": 13,
		"name": "상추",
		"price": 4200,
		"type": 3,
		"best": true
	},
	{
		"id": 14,
		"name": "깻잎",
		"price": 4300,
		"type": 3,
		"best": true
	},
	{
		"id": 15,
		"name": "오이고추",
		"price": 4400,
		"type": 3,
		"best": false
	},
	{
		"id": 7,
		"name": "키위",
		"price": 3100,
		"type": 2,
		"best": true
	},
	{
		"id": 8,
		"name": "딸기",
		"price": 3200,
		"type": 2,
		"best": true
	},
	{
		"id": 9,
		"name": "수박",
		"price": 3300,
		"type": 2,
		"best": false
	},
	{
		"id": 10,
		"name": "참외",
		"price": 3400,
		"type": 2,
		"best": true
	},
	{
		"id": 11,
		"name": "미나리",
		"price": 4000,
		"type": 3,
		"best": true
	},
	{
		"id": 12,
		"name": "고사리",
		"price": 4100,
		"type": 3,
		"best": false
	},
	{
		"id": 13,
		"name": "상추",
		"price": 4200,
		"type": 3,
		"best": true
	},
	{
		"id": 14,
		"name": "깻잎",
		"price": 4300,
		"type": 3,
		"best": true
	},
	{
		"id": 15,
		"name": "오이고추",
		"price": 4400,
		"type": 3,
		"best": false
	}
];


const VIEW = 10; // 1페이지에 보이는 아이템 수

const Pagination = () => {
	const [items, setItems] = useState([]);
	const [viewItem, setViewItem] = useState([]);
	const [pagi, setPagi] = useState([]); // 총 페이지의 배열
	const [viewPage, setViewPage] = useState(1); // 보고 있는 페이지
	const [total, setTotal] = useState(0); // 전체 페이지 수

	const CustomPagination = val => { // val: 5
		let pages = [];
		for (let i = 1; i <= val; i++) {
			pages.push(i);
		}
		setPagi(pages);
	};

	useEffect(() => {
		const start = (viewPage - 1) * VIEW;  // 보고 있는 페이지의 상품 index
		const end = start + VIEW > ITEMS.length ? ITEMS.length - 1 : start + VIEW;
		
		const _items = ITEMS.filter((item, idx) => {
			if (start <= idx && idx < end) {
				return item;
		 	} else {
				return null;
			}
		});

		setViewItem(_items);
	}, [viewPage]);

	useEffect(() => {
		const ct = Math.ceil(ITEMS.length / VIEW);
		setTotal(ct);
		CustomPagination(ct);
	}, []);

	return (
		<div>
			<div>
				{viewItem.map(item => (
					<div>
						{item.name}
					</div>
				))}
			</div>
			<ul className="pagination">
				{pagi.map(item => (
					<li onClick={() => setViewPage(item)} className={item === viewPage ? 'activePage' : ''}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default Pagination;