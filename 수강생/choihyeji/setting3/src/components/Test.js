import React, {useState} from 'react';

const Test = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);
    const increasement = () => {
        setCount(count + 1);
    };
    const decresement = () => {
        setCount(count -1);
    };
    const multiple = () => {
        setCount2(count2 * 2);
    };
    return (
        <div>
            <h1>It's just test</h1>
            <h2>{count}</h2>
            <h2>{count2}</h2>
            <button onClick={increasement}>증가</button>
            <button onClick={decresement}>감소</button>
            <button onClick={multiple}>따블</button>
        </div>
    );
};

export default Test;