import React from 'react'

const Card = ({ goods:{ name, age, tel }, index, onDeleteA }) => {
    return (
        <div className="card" key={`CARD${inedx}`}>
            <div className="info">
                <div className="name">이름 : {item.name}</div>
                <div className="age">나이 : {item.age}</div>
                <div className="Tel">전화번호 : {item.tel}</div>
            </div>
            <div className="delet">
                <button onClick={() => onDeleteA(index)}>삭제</button>
            </div>
        </div>
    );
};

export default Card;