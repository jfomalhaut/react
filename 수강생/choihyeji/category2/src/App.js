import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import List from './routers/List';

const App = () => {
    return (
       <BrowserRouter>
            <Switch>
                <Route path="/:category" exact component={List} />
                <Redirect path="*" to="/all" /> 
            </Switch>
       </BrowserRouter>
    );
};

export default App;