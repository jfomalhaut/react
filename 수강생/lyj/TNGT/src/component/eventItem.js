import React from 'react';
import imageURI from './../globals/imageURI';

const EventItem = ({ item: { name, text, src} }) => {
    return (
        <div className="banner_box">
            <img src={imageURI[src]} />
            <div className="box_tit">
                <span className="box_name">{name}</span>
                <span className="box_dec">{text}</span>
            </div>
        </div>
    );
};

export default EventItem;