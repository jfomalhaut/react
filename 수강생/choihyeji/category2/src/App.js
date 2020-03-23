import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import List from './routers/List';

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