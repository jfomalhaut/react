import React from 'react'

const card = () => {
    return (
        <div className="card" key={`CARD${index}`}>
            <div className="info">
                <div className="name">이름: {item.name}</div>
                <div className="age">연령: {item.age}</div>
                <div className="number">전화번호: {item.number}</div>
            </div>
            <div className="delete">
                <button onClick={() => onDelete(index)}>삭제</button>
            </div>
        </div>
    );
};

export default card;