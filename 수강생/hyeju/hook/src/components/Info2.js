import React from 'react';

const Info2 = ({ item: { name, age, tel }, index, onDelete }) => {
    return (
        <div className="list" key={`INFO${index}`}>
            <div className="info">
                <div className="margin name">이름 : {name}</div>
                <div className="margin age">연령 : {age}세</div>
                <div className="tel">전화번호 : {tel}</div>
            </div>
            <div className="delete">
                <button className="delete_box" onClick={() => onDelete(index)}>삭제</button>
            </div>
        </div>
    )
};


export default Info2;