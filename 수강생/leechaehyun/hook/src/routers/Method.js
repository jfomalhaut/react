import React from 'react';
import './Method.css';

const Method = () => {
    
    const onTest = value => {
        console.log(value + '삭제!');
    };

    return (
        <div className="container">
            <div className="item">
                <b>Item1</b><button onClick={() => onTest(0)}>삭제</button>
            </div>
            <div className="item">
                <b>Item2</b><button onClick={() => onTest(1)}>삭제</button>
            </div>
            <div className="item">
                <b>Item3</b><button onClick={() => onTest(2)}>삭제</button>
            </div>
            <div className="item">
                <b>Item4</b><button onClick={() => onTest(3)}>삭제</button>
            </div>
        </div>
    );
};

export default Method;