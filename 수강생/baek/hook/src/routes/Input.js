import React, { useState, useRef, useEffect } from 'react';

const getAverage = (numbers) => {
    if(numbers.length === 0){
        return 0;
    }

    const sum = numbers.reduce((acc, cur) => acc + cur);
    const avg = sum / numbers.length;
    return Math.round(avg);
};

const test = _list => {
    if (_list.length === 0) {
        return 0;
    }
    const sum = _list.reduce((acc, cur) => acc + cur);
    return sum / _list.length;
};

const Input = () => {
    const [data, setData] = useState('');
    const [list2, setList2] = useState([]);
    const el = useRef(null);
    // const [number, setNumber]  = useState('');
    // const [list, setList] = useState([]);
    // const inputElement = useRef();

    const onChangeData = ({ target: { value }}) => {
        setData(value);
    };

    const onInsert2 = () => {
        if (data === '') {
            return;
        }
        const empty = list2.concat(parseInt(data));
        setList2(empty);
        setData('');
        el.current.focus();
    };

    // const handler = event =>{
    //     const {target : {value}} = event;
    //     setNumber(parseInt(value));
    // };

    // const onInsert = () => {
    //     const nextList = list.concat(number);
    //     setList(nextList);
    //     setNumber('');
    //     inputElement.current.focus();
    // };

    // const onEnter = event =>{
    //     if(event.key === 'Enter'){
    //         onInsert();
    //     }
    // };

    useEffect(() => {
        // console.log(list2);
    }, [list2]);

    return(
        <div>
            {/* <input ref={inputElement} value ={number} onChange = {handler}  onKeyPress={onEnter} placeholder = "입력하시오"/>
            <br/> */}
            <input ref={el} value={data} onChange={onChangeData} placeholder="new"/>
            <button onClick={onInsert2}>insert</button>
            <ul>
                {list2.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
            <div>
                평균값: {test(list2)}
            </div>
            {/* onchange는 input창을 감시하고있는것  */}

            {/* <button onClick = {onInsert}>입력</button>
            <ul>
                {list.map((item, idx) => (
                    <li key = {idx}>{item}</li>
                ))} 
            </ul>
            <div>
                현재 b입력된 값 : {number}
            </div>
            <div>
                전체의 평균 값 : {getAverage(list)}
            </div> */}
        </div>
    );
};
export default Input;