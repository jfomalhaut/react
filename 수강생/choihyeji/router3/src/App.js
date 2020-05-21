import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './routers/Home';
import List from './routers/List';
import Detail from './routers/Detail';
import Detail2 from './routers/Detail2';
import Navigation from './components/Navigation';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/list" component={List} />
                <Route path="/detail/:id" component={Detail} />
                <Route path="/detail2/:src" component={Detail2} />
                <Redirect path="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;