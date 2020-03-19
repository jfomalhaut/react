import React, { useState } from 'react';

const getAverage = (numbers) => {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((acc, cur) => acc + cur);
    const avg = sum / numbers.length;
    return Math.round(avg);
};

const Input = () => {
    const [number, setNumber] = useState(0);
    const [list, setList] = useState([]);
    const inputElement = useRef();

    const handler = event => {
        const { target: { value } } = event;
        // console.log(event.target.value)
        setNumber(parseInt(value));
    };

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
            <input ref={inputElement} value={number} onChange={handler} onKeyPress={onEnter} placeholder="입력하세요"/>
            <button onClick={onInsert}>입력</button>
            <ul>
                {list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
            <div>
                현재 입력된 값 : { number } 
            </div>
            <div>
                전체의 평균 값 : { getAverage(list) } 
            </div>
        </div>
    );
};

export default Input;
