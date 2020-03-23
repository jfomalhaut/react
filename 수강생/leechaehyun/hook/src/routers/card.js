import React from 'react';

const getcard = () => {
    return (
        <div className="card" key={`CARD${index}`}>
            <div className="info">
                <div className="name">이름: {item.name}</div>
                <div className="age">연령: {item.age}세</div>
                <div className="tel">전화번호: {item.tel}</div>
            </div>
            <div className="delete">
                <button onClick={() => onDelete(index)}>삭제</button>
            </div>
        </div>
    )
};

export default getcard;
