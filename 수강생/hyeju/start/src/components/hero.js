import React, { useState } from 'react';
import './hero.css';


const Hero = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(1);
    const increasement = () => {
        setCount(count + 1);
    };
    const decreasement = () => {
        setCount2(count2 - 1);
    };
    const multi = () => {
        setCount3(count3 * 2);
    }


    return (
        <div>
            <h1>Hello, I'm Hero.</h1>
            <div className="container">
                <h2>{count}</h2>
                <button onClick = {increasement}>증가</button>
            </div>
            <div className="container">
                <h2>{count2}</h2>
                <button onClick = {decreasement}>빼기</button>
            </div>
            <div className="container">
                <h2>{count3}</h2>
                <button onClick = {multi}>2배</button>
            </div>
        </div>
    );
};

export default Hero;