import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './route/Home';
import List from './route/List';
import Detail from './route/Detail';
import Navigation from './component/Navigation';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/list" component={List}/>
                <Route path="/detail/:id" component={Detail}/>
                <Redirect path="*" to="/"/>
            </Switch>
        </BrowserRouter>
    );
};
export default App;