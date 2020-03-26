import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai';
import '../routes/List.css';


const Items = ({item : {id, name, price, src, check}}) => {
    return(
        <div className="item">
            <div className={`img ${name}`}>
                <span className="icon">
                    <AiOutlineCheck/>
                </span>
                <img src={src}/>
            </div>
            <div className="info">
                <h3>이름 : {name}</h3>
                <h3>가격 : {price}원</h3>
            </div>
        </div>
    )
}

export default Items;