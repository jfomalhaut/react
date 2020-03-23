import React from 'react';

const Item = ({item : {id, name, price}}) => {
    const transType= type =>{

        switch (type){
            case 1: "수산물";
            case 2: "청과";
            case 3: "야채";
        }
    }
    return(
        <div className="item">
            <div className={`img color${type}`}></div>
            <div className="info">
                <div className="top">
                    <span className={`type border${type}`}>{transType(type)}</span>
                    <span className="name">{name}</span>
                </div>
                <div className="price">{price}</div>
            </div>
        </div>
    );
};

export default Item;