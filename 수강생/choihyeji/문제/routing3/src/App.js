import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Home from '../routers/Home';
import About from '../routers/About';
import Setting from '../routers/Setting';
import Navigation from '../components/Navigation';


const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path="/home" component={Home} exact={true} />
                <Route path="/about/:data" component={About} />
                <Route path="/setting/:data" component={Setting} />
                <Redirect path="*" to="/home" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;