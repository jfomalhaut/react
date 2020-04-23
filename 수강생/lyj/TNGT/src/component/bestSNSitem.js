import React from 'react';
import imageURI from './../globals/imageURI';

const BestSNSitem = ({ item:{ src, src2 }}) => {
    return (
        <div className="sns_img">
            <div className="sns_icon">
                <img className="sns_icon1" src={imageURI[src2]} />
            </div>
            <img src={imageURI[src]} />
        </div>
    );
};

export default BestSNSitem;