import React, { useState, useEffect } from 'react';
// import Card from '../components/Card';
import Card2 from '../components/Card2';

const Input2 = () => {
    
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [number, setNumber] = useState('');
    const [phoneBook, setPhoneBook] = useState([]);

    const nameHandler = event => {
        const { target: { value } } = event;
        setName(value);
    };

    const ageHandler = event => {
        const { target: { value } } = event;
        setAge(value);
    };

    const numberHandler = event => {
        const { target: { value } } = event;
        setNumber(value);
    };

    const onInsert = () => {
        if(name === '' || age === '' || number === '') {
            alert('제대로 입력하세요');
            return;
        }
        
        const data = {
            name, //name: name;처럼 이름이 같을 때 가능하다
            age,
            number
        }
        const nextPhoneBook = phoneBook.concat(data);
        setPhoneBook(nextPhoneBook);

        setName('');
        setAge('');
        setNumber('');
    };

    const onDelete = _index => {
        const afterPhoneBook = phoneBook.filter((item, index) => {
            return index !== _index;
        });

        setPhoneBook(afterPhoneBook);
    };

    useEffect(() => {
        console.log(phoneBook);
    }, [phoneBook]);
    

    return (
        <div className="container">
            <div className="inputForm">
                <div className="left">
                    <div className="field">
                        <input value={name} onChange={nameHandler} placeholder="이름" />
                    </div>
                    <div className="field">
                        <input value={age} onChange={ageHandler} placeholder="나이" />
                    </div>
                    <div className="field">
                        <input value={number} onChange={numberHandler} placeholder="전화번호" />
                    </div>
                </div>
                <div className="right">
                    <button onClick={onInsert}>입력</button>
                </div>
            </div>
            <div className="list">
                {phoneBook.map((item, index) => (
                    <Card2 goods={item} index={index} onDelete={onDelete} key={`CARD${index}`} />
                ))}
            </div>
        </div>
    );
};

export default Input2;