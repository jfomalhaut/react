import React, { useContext, useEffect } from 'react';
import AppContext from './../contexts/AppContext';

const Page1 = ({ history }) => {
    const {state, dispatch} = useContext(AppContext);
    const setUrl = url => {
        dispatch({ type: 'SET_URL', data: url });
    };

    useEffect(() => {
        dispatch({ type: 'SET_URL', data: 'page1' });
    }, []);

    return (
        <div>
            <h1>현재의 URL : {state.url}</h1>
            <button onClick={() => setUrl('naver')}>naver</button>
            <button onClick={() => setUrl('google')}>google</button>
            <button onClick={() => setUrl('kakao')}>kakao</button>
            <button onClick={() => history.push('/page2')}>page2</button>
        </div>
    )
};

export default Page1;