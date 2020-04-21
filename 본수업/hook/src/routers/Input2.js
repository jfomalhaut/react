import React, { useState, useEffect } from 'react';
// import Card from '../components/Card';
// import Card2 from '../components/Card2';

import { Card, Card2 } from '../components';

const Input2 = () => {
	const [phoneBook, setPhoneBook] = useState([]);
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [tel, setTel] = useState('');
	
	const onChangeName = event => {
		const { target: { value } } = event;
		setName(value);
	};
	
	const onChangeAge = event => {
		const { target: { value } } = event;
		setAge(value);
	};
	
	const onChangeTel = event => {
		const { target: { value } } = event;
		setTel(value);
	};

	const onInsert = () => {
		if (name === '' || age === '' || tel === '') {
			alert('입력되지 않은 항목이 있습니다');
			return;
		}
		const data = { name, age, tel };
		const nextPhoneBook = phoneBook.concat(data).reverse();
		setPhoneBook(nextPhoneBook);
		setName('');
		setAge('');
		setTel('');
	};

	const onDelete = _index => {
		const afterPhoneBook = phoneBook.filter((item, index) => {
			return index !== _index;
		}).reverse();
		setPhoneBook(afterPhoneBook);
	};

	useEffect(() => { // phoneBook이라는 값을 실시간으로 체크한다.
		console.log(phoneBook);
	}, [phoneBook]);

	return (
		<div className="container">
			<div className="inputForm">
				<div className="left">
					<div className="field">
						<input value={name} placeholder="이름을 입력하세요" onChange={onChangeName} />
					</div>
					<div className="field">
						<input value={age} placeholder="연령을 입력하세요" onChange={onChangeAge} />
					</div>
					<div className="field">
						<input value={tel} placeholder="전화번호를 입력하세요" onChange={onChangeTel} />
					</div>
				</div>
				<div className="right">
					<button onClick={onInsert}>입력</button>
				</div>
			</div>
			<div className="list">
				{phoneBook.map((item, index) => (
					<Card2 onDelete={onDelete} index={index} goods={item} key={`CARD${index}`} />
				))}
			</div>
		</div>
	);
};

export default Input2;

// onDelete