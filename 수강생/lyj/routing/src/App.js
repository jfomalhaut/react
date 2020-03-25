import React from 'react';
import Home from './Routers/Home';
import About from './Routers/About';
import Setting from './Routers/Setting';
import { BrowserRouter, Switch, NavLink, Redirect, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" exact  component={Home}/> 
                <Route path="/about/:data" component={About}/>
                <Route path="/setting/:data" component={Setting}/>
                <Redirect path="*" to="/"/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;