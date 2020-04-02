import React from 'react';

const Card = ({ item: { name, age, tel}, index, onDelete }) => {
    return (
        <div className="card" key={`CARD${index}`}>
            <div className="info">
                <div className="name">name: {name}</div>
                <div className="age">age: {age}</div>
                <div className="tel">tle: {tel}</div>
            </div>
            <div className="delete">
                <button onClick={() => onDelete(index)}>delete</button>
            </div>
        </div>
    );
};

export default Card;