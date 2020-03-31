import React, { useState, useRef } from 'react';

const Input = () => {
    const [number, setNumber] = useState('');
    const [list, setList] = useState([]);
    const inputElement = useRef();

    const handler = event => {
        const { target: { value } } = event;
        setNumber(parseInt(value));
    };

    const onInsert = () => {
        const nextList = list.concat(number);
        setList(nextList);
        setNumber('');
        inputElement.current.focus();
    };

    const onEnter = event => {
        if(event.key === 'Enter') {
            onInsert();
        }
    };

    const getAverage = (numbers) => {
        if( numbers.length === 0 ) {
            return 0;
        };
        const sum = numbers.reduce((acc, cur) => acc + cur);
        const avg = sum / numbers.length;
        return Math.round(avg);
    };

    return (
        <div>
            <input ref={inputElement} value={number} onChange={handler} onKeyPress={onEnter} placeholder="Enter any number" />
            <button onClick={onInsert}>Input</button>
            <ul>
                {list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
            <div>
                현재 입력된 값: { number }
            </div>
            <div>
                전체 값의 평균: { getAverage(list) }
            </div>
        </div>
    );
};

export default Input;