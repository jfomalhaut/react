import React, { useState, useRef } from 'react'
import Card from '../components/Card';


const Input = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [tel, setTel] = useState('');
    const [phoneBook ,setbk] = useState([]);
    const onElementFocus = useRef();

    const onName = event =>{
        const {target : {value}} = event;
        setName(value);
    };
    
    const onAge = event =>{
        const {target : {value}} = event;
        setAge(value);
    };
    
    const onTel = event =>{
        const {target : {value}} = event;
        setTel(value);
    };
    
    const onInsert = () =>{
        const data = {name, age, tel};
        const setDate = phoneBook.concat(data);
        setbk(setDate);
        setName('');
        setAge('');
        setTel('');
        onElementFocus.current.focus();
        if(data.value===''){
            onInsert();
        }
    };

    const onEnter = event =>{
        if(event.key === "Enter"){
            onInsert();
        }
    };

    const onDel = _idx =>{
        const afterPh = (phoneBook.filter((item, index)=> {
            return index !== _idx
        }));
        setbk(afterPh);
    }
    

    return(
        <div className="container">
            <div className="inputWrap">
                <div className="left">
                    <input value={name} ref={onElementFocus} onChange={onName} onKeyPress={onEnter} placeholder="이름"/>
                    <input value={age} onChange={onAge} onKeyPress={onEnter} placeholder="나이"/>
                    <input value={tel} onChange={onTel} onKeyPress={onEnter} placeholder="번호"/>
                </div>
                <div>
                    <button onClick={onInsert}>입력</button>
                </div>
            </div>
            <div className="listWrap">
                {phoneBook.map((item, index)=> (
                    <Card item={item} idx={index} onDelete={onDel} key={`${item.index}`}/>
                ))}
            </div>
        </div>
    );
};

export default Input;