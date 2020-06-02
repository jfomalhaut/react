import React, { useContext, useEffect } from 'react';
import AppContext from './../contexts/Appcontext';

const Page3 = () => {
    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
        dispatch({ type: 'SET_URL', data: 'page3' });
    }, []);

    return (
        <div>
            <h1>PAGE3, state: {state.url}</h1>
        </div>
    )
}

export default Page3;