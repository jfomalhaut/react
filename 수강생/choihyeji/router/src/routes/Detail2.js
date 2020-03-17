import React from 'react';
import imageURI from '../globals/imageURI';

const Detail2 = ({ match }) => {
    return (
        // <h1>{match.params.name}</h1>
        <img src={`${imageURI[match.params.src]}`}/>
    );
};

export default Detail2;



// match의 기본 형태
// match = {
//     params: {
//         src: 'meat'
//     }

// 또는

// const {
//     params: {
//         src
//     }
// } = match;