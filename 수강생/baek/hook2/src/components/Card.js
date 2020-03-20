import React from 'react'

const Card = ({idx : {name, age, phone}}) =>{
   

    return(
        <div className="card" key={`CARD${idx}`}>
            <div className="info">
                <div className="name"> 이름 : {name}</div>
                <div className="age"> 나이 : {age}</div>
                <div className="phone">전화번호 : {phone}</div>
            </div>
            <div className="delete">
                <button onClick={ delHandler =>onDelete(idx)}>삭제</button>
            </div>
        </div>
    );
};
export default Card;