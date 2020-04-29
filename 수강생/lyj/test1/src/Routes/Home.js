import React, { useState } from 'react';

const Home = ({ history }) => {
    const [data, setData] = useState('');

    const onChangeData = event => {
        const { target: { value } } = event;
        setData(value);
    };

    const goAbout = () => {
        history.push(`/about/${data}`);
    };
    const goSetting = () => {
        history.push(`/setting/${data}`);
    };

    return (
        <div>
            <h1>HOME COMPONENT</h1>
            <input value={data} onChange={onChangeData} />
            <br></br>
            <button onClick={goAbout}>GO ABOUT</button>
            <button onClick={goSetting}>GO SETTING</button>
        </div>
    );
};

export default Home;