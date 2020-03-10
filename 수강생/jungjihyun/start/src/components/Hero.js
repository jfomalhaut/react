import React, { useState } from 'react';

const Hero = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(100);

    const increasement = () => {
        setCount(count + 1);
    };
    const multiple = () => {
        setCount2(count2 * 2);
    }


    return(
        <div>
            <h1>I'm Hero...</h1>
            <h2>{count}</h2>
            <h2>{count2}</h2>
            <button onClick={increasement}>증가</button>
            <button onClick={multiple}>곱하기</button>
        </div>
    );
};
export default Hero;