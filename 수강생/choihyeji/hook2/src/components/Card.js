import React from 'react';

const Card = ({ item: { name, age, tel }, index, onDelete }) => {
    return (
        <div key={`CARD${index}`} className="card">
            <div className="info">
                <div className="name">name: {name}</div>
                <div className="age">age: {age}</div>
                <div className="tel">tel: {tel}</div>
            </div>
            <button onClick={() => onDelete(index)}>Delete</button>
        </div>
    );
};

export default Card;