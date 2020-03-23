import React, { useState, useEffect } from 'react';
import Card from '../component/Card';
import './Input2.css';

const Input2 = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [tel, setTel] = useState('');
    const [phoneBook, setPhoneBook] = useState([]);

    const onChangeData = event => {
        const { target: { value } } = event;
        setName(value);
	};
    const onChangeData2 = event => {
        const { target: {value} } = event;
        setAge(value);
    };
    const onChangeData3 = event => {
        const { target: {value} } = event;
        setTel(value);
    };
    const onInsert = () => {
        const data = {name,age,tel};
        const all = phoneBook.concat(data);
        setPhoneBook(all);
        setName('');
        setAge('');
        setTel('');
    };

    // const onDelete = _index => {
    //     const afterPhoneBook = phoneBook.filter((item, index) => {
    //         return index !== _index;
    //     });
    //     setPhoneBook(afterPhoneBook);
    // };

    //실시간 체크
    useEffect(() => {
        console.log(phoneBook);
    }, [phoneBook]);

    return (
       <div className="container">
            <div className="inputForm">
                <div className="left">
                    <div className="field">
                        <input value={name} onChange={onChangeData} placeholder="이름"/>
                    </div>
                    <div className="field">
                        <input value={age} onChange={onChangeData2} placeholder="나이"/>
                    </div>
                    <div className="field">
                        <input value={tel} onChange={onChangeData3} placeholder="전화번호"/> 
                    </div>
                </div>
            </div>
            <div className="right">
                <button onClick={onInsert}>입력</button>
            </div>
            <div className="list">
                {phoneBook.map((item, index) => (
                    <Card item={index}/>
                ))}
            </div>
       </div>
        
    );
};
export default Input2;