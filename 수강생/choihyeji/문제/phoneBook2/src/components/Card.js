import React from 'react';

const Card = ({ item: { name, age, tel }, index, onDelete }) => {
    return (
        <div key={`CARD${index}`} className="card">
            <div className="info">
                <div className="name">이름: {name}</div>
                <div className="age">나이: {age}</div>
                <div className="tel">연락처: {tel}</div>
            </div>
            <div className="delete">
                <button onClick={() => onDelete(index)}>삭제</button>
            </div>
        </div>
    );
};

export default Card;