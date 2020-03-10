import React, { useState } from 'react';

function Hero() {
    const [count, setCount] = useState(0);
    const increasement = () => {
        setCount(count + 1);
    };
    
    return (
        <div>
            <h1>I'm Hero...</h1>
            <h2>{count}</h2>
            <button onClick={increasement}>증가</button>
        </div>
    );
};

export default Hero;