import React from 'react';

const Card2 = ({ onDelete, index, goodes: { name, age, tel }}) =>{
    return (
        <div className="card" key={`card${index}`}>
            <div className="info">
                <div className="name">이름: {name}</div>
                <div className="age">나이: {age}</div>
                <div className="tel">전화번호: {tel}</div>
            </div>
            <div className="delete">
                <button onClick={() => onDelete(index)}>삭제</button>
            </div>
        </div>
    );
}
export default  Card2;