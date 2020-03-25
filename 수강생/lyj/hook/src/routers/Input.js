import React, { useState, useRef } from 'react'

const getAverage = (numbers) => {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((acc, cur) => acc + cur);
    const avg = sum / numbers.length;
    return Math.round(avg);
};

const Input = () => {
    const [number, setnumber] = useState('');
    const [list, setList] = useState([]);
    const inputElement = useRef();

    const handler = event => {
        const { target: { value } } = event;
        setnumber(parseInt(value)); //parseInt는 숫자만 입력

        //위에와 같은 함수
        // console.log(event.target.value);
        // setnumber(event.target.value);
    };

    const onInsert = () => {
        const nextList = list.concat(number);
        setList(nextList);
        setnumber('');
        inputElement.current.focus(); //포커스가 유지되도록
    };

    //엔터쳐서 입력들어가도록
    const onEnter = event => {
        if (event.key === 'Enter') {
            onInsert();
        };
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
                    현재 입력된 값 : { number }
                </div>
                <div>
                    전체의 평균 값 : { getAverage(list) }
                </div>
            </div>
        );
    };

export default Input;