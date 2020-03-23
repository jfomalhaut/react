import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Setting from './routes/Setting';
import Navigation from './components/Navigation';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
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