import React from 'react'

const Card = ({onDel, idx, item :{name, age, tel}}) =>{

    return(
        <div className="card">
            <div className="info">
                <div className="name">{name}</div>
                <div className="age">{age}</div>
                <div className="tel">{tel}</div>
            </div>
            <div className="delete">
                <button onClick={() => onDel(idx)} >삭제</button>
            </div>
        </div>
    );
};
export default Card;