import React from 'react';
import List from './routers/List';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/:category" component={List} />
                <Redirect path="*" to="/all" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;