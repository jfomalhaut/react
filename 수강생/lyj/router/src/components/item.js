import React from 'react';
import './item.css';
import imageURI from '../globals/imageURI';

const Item = ({ item: { id, name, src }, onClickHandler, onClickHandler2 }) => {

    // const sendIdDetail = () => {
    //     onClickHandler(id);
    // };
    // return (
    //     <div className="item" onClick={sendIdDetail} >
    //         {name}
    //     </div>
    // )
    //아래와 같은 기능
// console.log(src);
//     return (
//         <div className="item" onClick={ () => onClickHandler2(name)} >
//             {name}
//             <img src={`${imageURI[src]}`}></img>
//         </div>
//     )

console.log(src);
    return (
        <div className="item" onClick={ () => onClickHandler2(src)} >
            {src}
        </div>
    )
}

export default Item;