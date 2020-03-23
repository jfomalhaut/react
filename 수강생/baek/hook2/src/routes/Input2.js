import React, { useState, useEffect } from 'react'
import './Input2.css'
import Card from '../components/Card'

const Input2 = () => {
    const [name, setName] =useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneBook, setPhBook ] = useState([]);

    const onName = event =>{
        const {target : {value}} = event;
        setName(value);
    }
    const onAge = event =>{
        const {target : {value}} = event;
        setAge(value);
    }
    const onPhone = event =>{
        const {target : {value}} = event;
        setPhone(value);
    };

    const onInsert = () =>{
        const phList = { name, age, phone }; 
        const nextph = phoneBook.concat(phList);
        setPhBook(nextph);
        setName('');
        setAge('');
        setPhone('');
    };

    const onDelete = _idx =>{
        const afterPhoneBook= phoneBook.filter((item, index)=>{
            return index !==_idx;
        });
        setPhBook(afterPhoneBook);
    }


    useEffect(()=>{
        console.log(phoneBook);
    }, [phoneBook])

    return(
        <div className="container">
            <div className="input">
                <div className="inLeft">
                    <div>
                        <input value={name} onChange={onName} placeholder="이름"/>
                    </div>
                    <div>
                        <input value={age} onChange={onAge} placeholder="나이"/>
                    </div>
                    <div>
                        <input value={phone} onChange={onPhone} placeholder="전화번호"/>
                    </div>
                </div>
                <div className="inRight">
                    <button onClick={onInsert}>입력</button>
                </div>
            </div>
            <div className="list">
             {phoneBook.map((item, idx) =>(
                 <Card item={idx}/>
            ))}
            </div>
        </div>
    );
};

export default Input2;