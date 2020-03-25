import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

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
            alert ("똑바로 입력하세요");
            return;
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
            return index !== _index;
        }).reverse();
        setPhoneBook(afterPhoneBook);
    };

    useEffect(() => {
        console.log(phoneBook);
    }, [phoneBook]);

    return (
        <div>
            <div className="inputForm">
                <div className="left">
                    <div className="field">
                        <input placeholder="이름" value={name} onChange={onChangeName} />
                    </div>
                    <div className="field">
                        <input placeholder="나이" value={age} onChange={onChangeAge} />
                    </div>
                    <div className="field">
                        <input placeholder="전화번호" value={tel} onChange={onChangeTel} />
                    </div>
                </div>
                <div className="right">
                    <button onClick={onInsert}>입력</button>
                </div>
            </div>
            <div className="list">
                {phoneBook.length === 0 ? (
					<div className="none">리스트가 존재하지 않습니다</div>
				) : (
					phoneBook.map((item, index) => <Card key={`CARD${index}`} index={index} item={item} onDelete={onDelete} />)
				)}
            </div>
        </div>      
    );
};

export default Input;