import React, { useState } from 'react'
import Card2 from '../components/Card2';

const Input = () => {
    const [name, setName]= useState('');
    const [age, setAge]= useState('');
    const [tel, setTel]= useState('');
    const [phonebook, setph]= useState([]);

    const onName = ev =>{
        const {target : {value}}= ev;
        setName(value);
    };
    const onAge = ev =>{
        const {target : {value}}= ev;
        setAge(value);
    };
    const onTel = ev =>{
        const {target : {value}}= ev;
        setTel(value);
    };

    const onInsert = () => { 
        const phList = { name, age, tel }; 
        const nextph = phoneBook.concat(phList);
        setph(nextph);
        setName('');
        setAge('');
        setTel('');
    };
    
    const onEnter = event =>{
        if(event.key === "Enter"){
            onInsert();
        }
    };

    const onDel = _idx => {
        const afterPhBook = (phonebook.filter((item, idx)=> {
                return (_idx !== idx)
        }))
        setph(afterPhBook);
    };


    return(
        <div className="container">
            <div className="inputWrap">
                <div className="left">
                    <input value={name} onKeyPress={onEnter} onChange={onName} placeholder="이름"/> 
                    <input value={age} onChange={onAge} placeholder="나이"/> 
                    <input value={tel} onChange={onTel} placeholder="번호"/> 
                </div>
                <div className="right">
                    <button onClick={onInsert}>입력</button>
                </div>
            </div>
            <div className="listWrap">
                {phonebook.map((item, index)=>
                (<Card2 onDel = {onDel} index = {index} goods = {item} key={`CARD${index}`}/>)
                )}
            </div>
        </div>
    );
};

export default Input;