import React, { useContext, useEffect } from 'react';
import AppContext from '../contexts/AppContext';

const Page2 = () => {
    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
        dispatch({ type: 'SET_URL', data: 'page2'});
    },[]);
    
    return (
        <div>page2, state: {state.url}</div>
    );
};

export default Page2;