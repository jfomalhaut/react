import React, { useContext, useEffect } from 'react';
import AppContext from '../contexts/AppContext';

const Page3 = () => {
    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
        dispatch({ type: 'SET_URL', data: 'page3'});
    },[]);

    return (
        <div>page3, state: {state.url}</div>
    );
};

export default Page3;