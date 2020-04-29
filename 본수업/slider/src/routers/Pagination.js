import React, { useEffect, useState } from 'react';
import './Pagination.css';

const VIEW = 8; // 1페이지에 보이는 아이템 수
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

const Pagination = ({ history, match: { params: { page } } }) => {
	const [viewItem, setViewItem] = useState([]);
	const [total, setTotal] = useState(0);

	const CustomPagination = ({ totalPage }) => { //내부에 컴퍼넌트를 만듦
		let pages = [];
		for (let i = 1; i <= totalPage; i++) {
			pages = pages.concat(i);
		}
		return (
			<ul className="pagination">
				{pages.map((item) => (
					<li 
						key={`PAGE${item}`} 
						onClick={() => history.push(`/list/${item}`)} 
						className={item === Number(page) ? 'activePage' : ''}
					>
						{item}
					</li>
				))}
			</ul>
		);
	};

	useEffect(() => {
		const start = (page - 1) * VIEW;  // 보고 있는 페이지의 상품 index
		const end = start + VIEW > ITEMS.length ? ITEMS.length - 1 : start + VIEW;
		const _items = ITEMS.filter((item, idx) => (start <= idx && idx < end));
		setViewItem(_items);
	}, [page]);

	useEffect(() => {
		const ct = Math.ceil(ITEMS.length / VIEW);
		setTotal(ct);
	}, []);

	return (
		<div className="pageContainer">
			<div className="pageList">
				{viewItem.map((item, index) => (
					<div key={`ITEM${index}`} className="pageItem">
						{item.name}
					</div>
				))}
			</div>
			<CustomPagination totalPage={total} />
		</div>
	);
};

export default Pagination;