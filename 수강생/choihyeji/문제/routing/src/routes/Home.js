import React, { useState } from 'react';

const Home = ({ history }) => {
    const [data, setData] = useState('');

    const onChangeData = event => {
        const { target: { value } } = event;
        setData(value);
    };

    const navigateAbout = () => {
        history.push(`/about/${data}`);
    };

    const navigateSetting = () => {
        history.push(`/setting/${data}`);
    };

    return (
        <div>
            <h1>Home Component</h1>
            <input value={data} onChange={onChangeData} />
            <br /><br />
            <button onClick={navigateAbout}>
                <h1>to About</h1>
            </button>
            <button onClick={navigateSetting}>
                <h1>to Setting</h1>
            </button>
        </div>
    );
};

export default Home;