import React, { useEffect } from 'react';
import ItemList from '../components/ItemList';
import Navi from '../components/Navi';
import Card from '../components/Card';

const TEMP = [
	{
		id: 1,
		label: '맴버십 제휴',
		items: [
			{ id: 1, cardSrc: 'https://cdn.dominos.co.kr/renewal2018/m/images/img_card_sk.png' },
			{ id: 1, cardSrc: 'https://cdn.dominos.co.kr/renewal2018/m/images/img_card_sk.png' },
			{ id: 1, cardSrc: 'https://cdn.dominos.co.kr/renewal2018/m/images/img_card_sk.png' },
			{ id: 1, cardSrc: 'https://cdn.dominos.co.kr/renewal2018/m/images/img_card_sk.png' },
			{ id: 1, cardSrc: 'https://cdn.dominos.co.kr/renewal2018/m/images/img_card_sk.png' },
		],
	},
	{
		id: 2,
		label: '신용카드',
		items: [
			{ id: 1, cardSrc: 'https://cdn.dominos.co.kr/renewal2018/w/img/img_creditcard01.png' },
			{ id: 1, cardSrc: 'https://cdn.dominos.co.kr/renewal2018/w/img/img_creditcard01.png' },
			{ id: 1, cardSrc: 'https://cdn.dominos.co.kr/renewal2018/w/img/img_creditcard01.png' },
			{ id: 1, cardSrc: 'https://cdn.dominos.co.kr/renewal2018/w/img/img_creditcard01.png' },
			{ id: 1, cardSrc: 'https://cdn.dominos.co.kr/renewal2018/w/img/img_creditcard01.png' },
		],
	},
];

const Event2 = () => {
	useEffect(() => {
		// setCards(TEMP);
	}, []);

	return (
		<div>
			<h1>싱시할인</h1>
			<h3>내용</h3>
			<h3>내용</h3>
			<h3>내용</h3>
			<h3>내용</h3>
			<h3>내용</h3>
			{TEMP.map((item) => (
				<>
					<h1>{item.label}</h1>
					<div className="cardContainer">
						{item.items.map((item2) => (
							<Card item={item2} />
						))}
					</div>
				</>
			))}
		</div>
	);
};

export default Event2;
