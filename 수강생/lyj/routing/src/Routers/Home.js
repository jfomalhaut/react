import React, { useState } from 'react';

const Home = ({ history }) => {
    const [data, setData] = useState(''); //history 화면끼리 움직이게 하기위해서

    const onChangeData = event => {
        const { target: { value } } = event;
        setData(value);
    };

    const navigateAbout = () => {
        // history.push('/about/'+data); //같은기능이지만 안씀
        history.push(`/about/${data}`);
    };

    const navigateSetting = () => {
        history.push(`setting/${data}`);
    };

    return (
        <div>
            <h1>HOME COMPONENT</h1>
            <input value={data} onChange={onChangeData} />
            <br></br>
            <button onClick={navigateAbout}>About으로</button>
            <button onClick={navigateSetting}>Setting으로</button>
        </div>
    );
};

export default Home;