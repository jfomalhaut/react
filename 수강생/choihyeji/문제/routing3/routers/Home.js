import React, { useState } from 'react';

const Home = ( { history }) => {
    const [data, setData] = useState('');

    const onChangeData = event => {
        const { target: { value } } = event;
        setData(value);
    };

    const navigateAbout = () => {
        history.push(`/about/${data}`);
    };

    const navigateSetting = () => {
        history.push(`setting/${data}`);
    };

    return (
        <div>
            <h1>Home Component</h1>
            <input value={data} onChange={onChangeData} />
            <button onClick={navigateAbout}>to About</button>
            <button onClick={navigateSetting}>to Setting</button>
        </div>
    );
};

export default Home;