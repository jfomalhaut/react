import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

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
        const { target: { value} } = event;
        setTel(value);
    };

    const onInsert = () => {
        if( name === '' || age === '' || tel === '') {
            alert('Plz check your answer again');
        }
        const data = { name, age, tel };
        const nextPhoneBook = phoneBook.concat(data);
        setPhoneBook(nextPhoneBook);
        
        setName('');
        setAge('');
        setTel('');
    };

    const onDelete = _index => {
        const afterPhoneBook = phoneBook.filter((item, index) => {
            return _index !== index;
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
                    <div clasName="field">
                        <input value={name} onChange={onChangeName} placeholder="Enter your name" />
                    </div>
                    <div clasName="field">
                        <input value={age} onChange={onChangeAge} placeholder="Enter your age" />
                    </div>
                    <div clasName="field">
                        <input value={tel} onChange={onChangeTel} placeholder="Enter your phone number"/>
                    </div>
                </div>
                <div className="right">
                    <button onClick={onInsert}>Input</button>
                </div>
            </div>
            <div className="list">
                {phoneBook.map((item, index) => (
                    <Card key={`CARD${index}`} item={item} index={index} onDelete={onDelete} />
                ))}
            </div>
        </div>
    );
};

export default Input2;