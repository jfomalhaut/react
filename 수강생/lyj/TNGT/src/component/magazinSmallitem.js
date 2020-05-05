import React from 'react';
// import './Magazin.css';
import imageURI from './../globals/imageURI';

const MagazinSmallitem = ( {maItem, item:{ itemTitle1, src2 } }) => {
    return (
        <div className={`small ${maItem}`}>
            <img className="sub_img" src={imageURI[src2]} />
            <div className="sub_tit">
                <span>{itemTitle1}</span>
            </div>
        </div>
    );
};

export default MagazinSmallitem;