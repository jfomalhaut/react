import React, { useState, useEffect } from 'react';
import './Input2.css';
import Info from '../components/Info.js';
import Info2 from '../components/Info2.js';

const Input2 = () => {
    const [data1, setData1] = useState('');
    const [data2, setData2] = useState('');
    const [data3, setData3] = useState('');
    const [list, setlist] = useState([]);

    const onChangeData1 = event => {
        const { target : { value } } = event;
        setData1(value);
    };

    const onChangeData2 = event => {
        const { target : { value } } = event;
        setData2(value);
    };

    const onChangeData3 = event => {
        const { target : { value } } = event;
        setData3(value);
    };
    
    const onInsert = () => {
        const info = {
            name : data1,
            age : data2,
            phone : data3
        };
        const phoneList = list.concat(info);
        setlist(phoneList);
        setData1('');
        setData2('');
        setData3('');
    };

    
    const onDelete = _index => {
        const remove = list.filter((item, index) => {
            return index !== _index;
        });
        setlist(remove);
    };

    useEffect(() => {
        console.log(list);
    }, [list]);


    return (
        <div className="container1">
            <div className="inputform">
                <div className="left">
                    <div className="field">
                        <input value={ data1 } onChange={ onChangeData1 } placeholder="이름을 입력하세요."/>
                    </div>
                    <div className="field"> 
                        <input value={ data2 } onChange={ onChangeData2 } placeholder="나이를 입력하세요."/>
                    </div>
                    <div className="field">
                        <input value={ data3 } onChange={ onChangeData3 } placeholder="전화번호를 입력하세요."/>
                    </div>
                </div>
                <div className="right">
                    <button onClick={onInsert}>입력</button>
                </div>
            </div>
            <div className="info">
                <li className="info_li">
                    {list.map((item, index) => (
                        <Info2 key={`INFO2${index}`} item={item} index={index} onDelete={onDelete} />
                    ))}
                    {/* { list.map((item, index) => (
                            <Info key={`INFO${index}`} index={index} item={item} onDelete={onDelete} />
                        ))} */}
                </li>
            </div>
            
        </div>
    )
};

export default Input2;