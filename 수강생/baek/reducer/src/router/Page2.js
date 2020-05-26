import React, { useContext, useEffect } from 'react';
import AppContext from '../contexts/AppContext';

const Page2 = () => {
    const { state, dispatch }= useContext(AppContext);

    useEffect(() => {
        dispatch({ type: 'SET_URL', data:'page2'})
    }, []);

    return (
        <h1>p2, state : {state.url}</h1>
    );
};

export default Page2;