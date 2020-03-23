import React, { useState } from 'react';
import './Home.css';

const Home = ( { history } ) => {
    const [ name, setName ] = useState('');

    const onChangeName = event => {
        const { target : { value } } = event;
        setName(value);
    };

<<<<<<< HEAD
    const goAbout = () => {
        history.push(`/about/${name}`);
        console.log(name);
=======
    const goAbout = value => {
        history.push(`/about/${name}`);
        console.log(value);
>>>>>>> 1f5b9b9a6fdeff09d01ade068d8e35114d0e9832
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