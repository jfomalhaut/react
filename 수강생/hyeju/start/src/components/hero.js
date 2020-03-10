import React, { useState } from 'react';


const Hero = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(20);
    const increasement = () => {
        setCount(count + 1);
    };


    return (
        <div>
            <h1>I'm Hero...</h1>
            <h2>{count}</h2>
            <h2>{count2}</h2>
            <button onClick = {increasement}>증가</button>
        </div>
    );
};

export default Hero;