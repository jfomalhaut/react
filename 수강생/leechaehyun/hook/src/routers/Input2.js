import React, { useState, useEffect } from 'react';
import '../routers/Input.css';
import getcard from '../routers/card';



const Input2 = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [tel, setTel] = useState('');
    const [phoneBook, setphoneBook] = useState([]);

    const onChangeName = event => {
        const { target : { value } } = event;
        setName(value);
    };
    const onChangeAge = event => {
        const { target : { value } } = event;
        setAge(value);
    };
    const onChangeTel = event => {
        const { target : { value } } = event;
        setTel(value);
    };
   

    const onInsert = () => {
        const data = {
            name: name,
            age: age,
            tel: tel
        };
        const nextphoneBook = phoneBook.concat(data);
        setphoneBook(nextphoneBook);
        setName('');
        setAge('');
        setTel('');
    };

    const onDelete = _index => {
        const afterPhoneBook = phoneBook.filter((item, index) => {
            return index !== _index;
        });
        setphoneBook(afterPhoneBook);
    };

    useEffect(() => {
       console.log(phoneBook); 
    }, [phoneBook]);

    return (
        <div className="container">
            <div className="Inputfrom">
                <div className="left">
                    <div className="field">
                        <input value={name} onChange={onChangeName} placeholder="이름"/>
                    </div>
                    <div className="field">
                        <input value={age} onChange={onChangeAge} placeholder="나이"/>
                    </div>
                    <div className="field">
                        <input value={tel} onChange={onChangeTel} placeholder="전화번호"/>
                    </div>
                </div>
                <div className="right">
                    <button onClick={onInsert}>입력</button>
                </div>
            </div>
            <div className="list">
                { phoneBook.map((item, index) => (
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
    );
};

export default Input2;