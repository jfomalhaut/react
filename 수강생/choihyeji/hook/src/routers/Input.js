import React, { useState, useRef } from 'react';

const getAverage = (numbers) => {
    if (numbers.length === 0) {
        return 0;
    }

    const sum = numbers.reduce((acc, cur) => acc + cur);
    const avg = sum / numbers.length;
    return Math.round(avg);
}


const input = () => {
    const [number, setNumber] = useState('');
    const [list, setList] = useState([]);
    const inputElement = useRef();

    const handler = event => {
        const { target: { value } } = event;
        setNumber(parseInt(value)); // parseInt: 숫자로 변환해줌
    }

    const onInsert = () => {
        const nextList = list.concat(number);
        setList(nextList);
        setNumber('');
        inputElement.current.focus();
    };

    const onEnter = event => {
        if (event.key === 'Enter') {
            onInsert();
        }  
    };

    return (
        <div>
            <input ref={inputElement} value={number} onChange={handler} onKeyPress={onEnter} placeholder="입력하세요" />
            <button onClick={onInsert}>입력</button>
            <ul>
                {list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
            <div>
                현재 입력된 값: { number }
            </div>
            <div>
                전체의 평균 값: { getAverage(list) }
            </div>
        </div>
    );
};

export default input;