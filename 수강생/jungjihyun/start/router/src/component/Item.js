import React from 'react';
import './Item.css';

const Item = ({ id, name, onClickHandler }) =>{

    const sendIdDetail = () =>{
        // console.log('작동');
        onClickHandler(id);
    };

    return ( 
        <div className="item" onClick={sendIdDetail}>
            {name}
        </div>
    );
};

export default Item;