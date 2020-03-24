import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai';
import '../routes/List.css';

const Items = ({item}) => {
    return(
        <div className="item">
            <span className="icon">
                <AiOutlineCheck/>
            </span>
            <div className="img">
                <img></img>
            </div>
            <div className="info">
                <h3>이름 :</h3>
                <h3>가격 :</h3>
            </div>
        </div>
    );
};

export default Items;