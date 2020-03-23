import React, { useState } from 'react';
import './About.css';

const About = ({ match, history}) => {
    const [ age, setAge ] = useState('');

    const onChangeAge = event => {
        const { target : { value } } = event;
        setAge(value);
    }

<<<<<<< HEAD
    const goSetting = () => {
        history.push(`/setting/${age}`);
=======
    const goSetting = value => {
        history.push(`/setting/{value}`);
>>>>>>> 1f5b9b9a6fdeff09d01ade068d8e35114d0e9832
    }


    return (
        <div className="container_1">
            <div className="hi">{match.params.name}님, 안녕하세요.</div>
            <div className="container">
                <div className="input">
                    <input value={ age } onChange={ onChangeAge } placeholder="나이를 입력하세요." />
                </div>
                <div className="enter" onClick={ goSetting }>입력</div>
            </div>
        </div>
    )
};

export default About;
