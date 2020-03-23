import React from 'react'

const getAverage = (number) => {
    if(number.length === 0){
        return 0;
    }
    const sum = number.reduce((acc,cur) => acc + cur);
    const avg = sum /number.length;
    return Math.round(avg);
};

export default getAverage;