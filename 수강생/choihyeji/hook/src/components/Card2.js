import React from 'react';

const Card2 = ({ goods: { name, age, number }, index, onDelete }) => {
    return (
        <div key={`CARD${index}`} className="card">
            <div className="info">
                <div className="name">이름: {name}</div>
                <div className="age">연령: {age}세</div>
                <div className="number">번호:{number}</div>
            </div>
            <div className="delete">
                <button onClick={() => onDelete(index)}>삭제</button>
            </div>
        </div>
    );
};

export default Card2;