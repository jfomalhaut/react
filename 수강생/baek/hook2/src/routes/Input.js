import React, { useState, useRef } from 'react';
import getAvetage from '../pipes/Average'

const Input = () =>{
    const [number, setNumber] = useState('');
    const [list, setList] = useState([]);
    const inputElement = useRef();
    
    const handelr = event => {
        const {target : {value} } = event;
        setNumber(parseInt(value));
    }

    const onEnter = event => {
        if(event.key === 'Enter'){
            onInsert();
        }
    }

    const onInsert = () => {
      const nextList = list.concat(number);
      setList(nextList);
      setNumber('');
      inputElement.current.focus();
    };

    return(
        <div>
            <input ref={inputElement} onKeyPress={onEnter} placeholder="입력하세요" onChange={handelr} value={number}/>
            <button onClick={onInsert}>입력</button>
            <ul>
                {list.map((item, idx) =>(
                    <li key={idx}>{item}</li>
                ))}
            </ul>
            <div>
                현재 입력된 값 : { number }
            </div>
            <div>
                전체의 평균 값 : {getAvetage(list)}
            </div>
        </div>
    );
};

export default Input;