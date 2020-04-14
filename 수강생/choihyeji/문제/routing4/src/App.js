import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './routers/Home';
import About from './routers/About';
import Setting from './routers/Setting';
import Navigate from './components/Navigate';

const App = () => {
    return (
        <BrowserRouter>
            <Navigate />
            <Switch>
                <Route path="/home" exact={true} component={Home} />
                <Route path="/about/:data" component={About} />
                <Route path="/setting/:data" component={Setting} />
                <Redirect path="*" to="/home" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;