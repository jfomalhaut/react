import React, { useContext, useEffect } from 'react';
import AppContext from '../contexts/AppContext';

const Page3 = () => {
    const { state, dispatch }= useContext(AppContext);

    useEffect(() => {
        dispatch({ type: 'SET_URL', data:'page3'})
    }, []);
    
    return (
        <h1>p3, state : {state.url}</h1>
    );
};

export default Page3;