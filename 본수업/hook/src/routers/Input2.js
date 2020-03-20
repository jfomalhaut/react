import React, { useState, useEffect } from 'react';
import './Input.css';

const Input2 = () => {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [tel, setTel] = useState('');
	const [phoneBook, setPhoneBook] = useState([]);
	
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
		const data = { name, age, tel };
		const nextPhoneBook = phoneBook.concat(data);
		setPhoneBook(nextPhoneBook);
		setName('');
		setAge('');
		setTel('');
	};

	const onDelete = _index => {
		const afterPhoneBook = phoneBook.filter((item, index) => {
			return index !== _index;
		});
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
						<input value={name} placeholder="이름을 입력하세요" onChange={onChangeName}/>
					</div>
					<div className="field">
						<input value={age} placeholder="연령을 입력하세요" onChange={onChangeAge}/>
					</div>
					<div className="field">
						<input value={tel} placeholder="전화번호를 입력하세요" onChange={onChangeTel}/>
					</div>
				</div>
				<div className="right">
					<button onClick={onInsert}>입력</button>
				</div>
			</div>
			<div className="list">
				{phoneBook.map((item, index) => (
					<div className="card" key={`CARD${index}`}>
						<div className="info">
							<div className="name">이름: {item.name}</div>
							<div className="age">연령: {item.age}세</div>
							<div className="tel">전화번호: {item.tel}</div>
						</div>
						<div className="delete">
							<button onClick={() => onDelete(index)}>삭제</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
};

export default Input2;