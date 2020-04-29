import React, { useState, useEffect } from 'react';
import imageURI from './../globals/imageURI';



const BestItems = ({ items:{ name, price, price2, sale, src }, index }) => {
    
    return (
        <div className="best_item">
            <img src={imageURI[src]}/>
            <div className="best_items_text">
                <div className="items_tit">{name}</div>
                <div className="items_price">
                    <div className="items_pri">{price}</div>
                    <div className="items_sale">{price2}</div>
                    <div className="sale">{sale}</div>
                </div>
            </div>
        </div>
    );
};

export default BestItems;
