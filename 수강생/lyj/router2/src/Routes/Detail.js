import React from 'react';
import imageURI from '../globals/imageURI';

const Detail = ({ match }) => {
    return (
        // <h1>{match.params.id}</h1>
        <img src={`${imageURI[match.params.src]}`} />
    );
};

export default Detail;