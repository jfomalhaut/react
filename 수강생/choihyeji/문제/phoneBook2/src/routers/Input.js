import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import './Input.css';

const Input = () => {
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
        if(name === '' || age === '' || tel === '') {
            alert("값을 다 입력해주세요");
            return;
        };

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



    useEffect(() => {
        console.log(phoneBook);
    },[phoneBook]);

    return (
        <div className="container">
            <div className="inputForm">
                <div className="left">
                    <div className="field">
                        <input value={name} onChange={onChangeName} placeholder="이름을 입력하세요"/>
                    </div>
                    <div className="field">
                        <input value={age} onChange={onChangeAge} placeholder="나이를 입력하세요"/>
                    </div>
                    <div className="field">
                        <input value={tel} onChange={onChangeTel} placeholder="연락처를 입력하세요"/>
                    </div>
                </div>
                <div className="right">
                    <button onClick={onInsert}>입력</button>
                </div>
            </div>
            <div className="list">
                {phoneBook.map((item, index) => (
                    <Card item={item} onDelete={onDelete} index={index} key={`CARD${index}`} />
                ))}
            </div>
        </div>
    );
};

export default Input;