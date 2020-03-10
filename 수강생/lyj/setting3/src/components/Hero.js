import React, { useState } from 'react';

const Hero = () => {
    const [count, setCount] = useState(0);
    
    const increa = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>REACT</h1>
            <h2>{count}</h2>
            <button onClick={increa}>증가</button>
        </div>
    );
};

export default Hero;