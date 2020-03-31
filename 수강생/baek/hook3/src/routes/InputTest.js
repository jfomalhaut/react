import React, { useState } from 'react'

const InputTest = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [tel, setTel] = useState('')
    const [phBook, setPhBook] = useState([]);

    const onName = ev => {
        const {target : {value}} = ev;
        setName(value);
    };

    const onAge = ev => {
        const {target : {value}} = ev;
        setAge(value);
    };

    const onTel = ev => {
        const {target : {value}} = ev;
        setTel(value);
    }

    const onInsert = () => {
        const data = { name, age, tel };
        const nextPh = phBook.concat(data).reverse();
        setPhBook(nextPh);
        setName('');
        setAge('');
        setTel('');
    };

    const onDel = () => {

    }

    return (
        <div className="container">
            <div className="inputWrap">
                <div className="inputLeft">
                    <div>
                        <input value={name} onChange={onName} placeholder="이름"></input>
                    </div>
                    <div>
                        <input value={age} onChange={onAge} placeholder="나이"></input>
                    </div>
                    <div>
                        <input value={tel} onChange={onTel} placeholder="번호"></input>
                    </div>
                </div>
                <div className="inputRight">
                    <button onClick={onInsert}>입력</button>
                </div>
            </div>
            <div className="listWrap">
            {phBook.map((item, index)=> (
                <div className="card">
                    <div className="info">
                        <div className="name">{item.name}</div>
                        <div className="age">{item.age}</div>
                        <div className="tel">{item.tel}</div>
                    </div>
                    <button onClick={onDel}>삭제</button>
                </div>
            ))}
            </div>
        </div>
    );
};

export default InputTest;