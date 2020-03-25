import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';

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
        const data = {
            name, age, tel
        };
        const book = phoneBook.concat(data);
        setPhoneBook(book);
    };

    const onDelete = _ind => {
        const deletPhoneBook = phoneBook.filter((item, index) => {
            return index !== _ind;
        });
        setPhoneBook(deletPhoneBook);
    }

    useEffect ( () => {
        console.log(phoneBook);
    }, [phoneBook]);

    return (
        <div className="container">
            <div className="inputform">
                <div className="form">
                    <div>
                        <input value={name} onChange={onChangeName} placeholder="이름을 입력하세요" />
                    </div>
                    <div>
                        <input value={age} onChange={onChangeAge} placeholder="나이을 입력하세요" />
                    </div>
                    <div>
                        <input value={tel} onChange={onChangeTel} placeholder="전화번호을 입력하세요" />
                    </div>
                </div>
                <div className="enter">
                    <button onClick={onInsert}>입력</button>
                </div>
            </div>
            <div className="list">
                {phoneBook.map((item, index) => (
                    <Card />
                ))}
            </div>
        </div>
    );
};

export default Input;