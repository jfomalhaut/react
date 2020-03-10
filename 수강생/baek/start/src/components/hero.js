import React, { useState } from 'react';

function hero(){
    const [count, setCount] = useState(0);
    const increasement =() =>{
        setCount(count + 1);
    };
    return(
        <div>
            <h1>i'm hero</h1>
            <h2>{count}</h2>
            <button onClick={increasement}>증가</button>
        </div>
    );
};

export default hero;