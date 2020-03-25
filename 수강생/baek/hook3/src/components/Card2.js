import React from 'react'

const Card2 = ({goods :{name, age, tel}, index, onDel} ) =>{
    return(
        <div className="card">
            <div className="info">
                <div className="name">{name}</div>
                <div className="age">{age}</div>
                <div className="tel">{tel}</div>
            </div>
            <div className="delete">
                <button onClick={() => onDel(index)}>삭제</button>
            </div>
        </div>
    );
};

export default Card2;