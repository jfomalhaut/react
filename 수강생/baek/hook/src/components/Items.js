import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai';
import '../routes/List.css';

<<<<<<< HEAD

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
=======
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
>>>>>>> 8dc38937773a0bd77fe356f138be0d1e260e051b

export default Items;