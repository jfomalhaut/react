import React from 'react'

const Card = () => {
    return (
        <div className="card" key={`CARD${inedx}`}>
            <div className="info">
                <div className="name">이름 : {item.name}</div>
                <div className="age">나이 : {item.age}</div>
                <div className="Tel">전화번호 : {item.tel}</div>
            </div>
            <div className="delet">
                <button onClick={() => onDelete(index)}>삭제</button>
            </div>
        </div>
    );
};

export default Card;