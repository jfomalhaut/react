import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
// import '../routers/Input.css';
import Card2 from '../components/Card2';



const Input2 = () => {
    const [phoneBook, setphoneBook] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [tel, setTel] = useState('');

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
        if (name === '' || age === '' || tel === ''){
            alert('입력되지 않은 항목이 있습니다');
        }
        const data = { name, age, tel };
        const nextphoneBook = phoneBook.concat(data);
        setphoneBook(nextphoneBook);
        setName('');
        setAge('');
        setTel('');
    };

    const onDelete = _index => {
        const afterPhoneBook = phoneBook.filter((item, index) => {
            return index !== _index;
        }).reverse();
        setphoneBook(afterPhoneBook);
    };

    useEffect(() => {
       console.log(phoneBook); 
    }, [phoneBook]);

    return (
        <div className="container">
            <div className="inputForm">
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
                    <Card2 onDelete={onDelete} index={index} goods={item} key={`CARD${index}`} />
                ))}
            </div>
        </div>    
    );
};

export default Input2;