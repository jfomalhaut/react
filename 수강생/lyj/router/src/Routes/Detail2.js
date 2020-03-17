import React from 'react';
import imageURI from '../globals/imageURI';

const Detail2 = ({ match }) => {
    // const {
    //     params: {
    //         src
    //     }
    // } = match;
    // return (
    //     <img src={`${imageURI[src]}`} />
    // );
    //아래와 같은 내용
    
    return (
        // <h1>{match.params.name}</h1>
        <img src={`${imageURI[match.params.src]}`} />
    );

};

export default Detail2;