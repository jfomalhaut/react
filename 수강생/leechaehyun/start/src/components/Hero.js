import React, { useState } from 'react';

const Hero = () => {
    //useState(초기값)
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(100);
    // const [count3, setCount3] = useState(1);

    //function increasement(){} 와 같은 방식
    const increasement = () => {
        setCount(count + 1);
    }

    const decreasement = () => {
        setCount(count2 - 1);
    }

    const multiple = () => {
        setCount(count * 2);
    }

    return (
        <div>
            <h1>I'm Hero</h1>
            <h2>{count}</h2>
            <h2>{count2}</h2>
            <h2>{count3}</h2>
            <button onClick={increasement}>증가</button>
            <button onClick={decreasement}>감소</button>
            <button onClick={multiple}>곱하기</button>
        </div>
    );
};

export default Hero;