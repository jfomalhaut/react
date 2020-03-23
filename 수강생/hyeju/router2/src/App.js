import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navitation from './component/Navigation';
import Home from './routes/Home';
import About from './routes/About';
import Setting from './routes/Setting';

const App = () => {
    return (
        <BrowserRouter>
            <Navitation/>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/about/:name" exact={true} component={About}/>
                <Route path="/setting/:age" exact={true} component={Setting}/>
            </Switch>
        </BrowserRouter>
    )
};

export default App;
