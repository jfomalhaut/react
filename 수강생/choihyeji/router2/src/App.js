import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './routes/Home';
import List from './routes/List';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/list" component={List} />
                <Route path="/detail" conponent={Detail} />
                <Redirect path="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;