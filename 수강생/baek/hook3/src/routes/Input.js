import React, { useState } from 'react'

const Input = () => {
    const [data, setData] = useState('');
    const [list, setList] = useState([]);

    const handler = event =>{
        const {target:{value}} = event;
        setData(parseInt(value));

    }

    const onInsert = () =>{
        const nextList = list.concat(data);
        setList(nextList);
        setData('');
        inputElement.current.focus();
    }
    const onEnter = event =>{
        if(event.key === 'Enter'){
            onInsert();
        }
    }


    return (
        <div>
        <input ref={inputElement} onKeyPress={onEnter} value={data} onChange={handler} placeholder="new"/>
        <button onClick={onInsert}>입력</button>
        <ul>
            {list.map((item ,idx)=>(
                <li key={idx}>{item}</li>
            ))}
        </ul>
        </div>
    );
};

export default Input;