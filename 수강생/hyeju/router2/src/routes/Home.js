import React, { useState } from 'react';
import './Home.css';

const Home = ( { history } ) => {
    const [ name, setName ] = useState('');

    const onChangeName = event => {
        const { target : { value } } = event;
        setName(value);
        console.log(name);
    };

    const goAbout = value => {
        history.push(`/about/${value}`);
        // console.log(value);
    };

    return (
        <div className="container">
            <div className="input">
                <input value={ name } onChange={ onChangeName } placeholder="이름을 입력하세요." />
            </div>
            <div className="enter" onClick={ goAbout }>입력</div>
        </div>
    )
};

export default Home;