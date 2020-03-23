import React from 'react';
import imageURI from '../globals/imageURI';

const Detail2 = ({ match }) => {
    return (
        <div>
            <h1>{match.params.name}</h1>

            <img src={`${imageURI[match.params.src]}`}/>
        </div>
    );
};

export default Detail2;