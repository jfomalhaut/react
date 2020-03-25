import React from 'react';

const Card2 = ({ goods:{ name, age, number }, index, onDeleteA }) => {
    return (
        <div className="card" key={`CARD${index}`}>
            <div className="info">
                <div className="name">이름: {name}</div>
                <div className="age">연령: {age}</div>
                <div className="number">전화번호: {number}</div>
            </div>
            <div className="delete">
                <button onClick={() => onDeleteA(index)}>삭제</button>
                {/* 삭제하는 object의 index(몇번) 째인지 알기의해 */}
            </div>
        </div>
    );
};

export default Card2;