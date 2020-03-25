import React from 'react';
import { BrowserRouter, Switch, Router, Redirect } from 'react-router-dom';
import List from './routers/List';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Router excat path="/:category" component={List} />
                <Redirect path="*" to="/all" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;