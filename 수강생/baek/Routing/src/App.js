import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './routes/Home'
import About from './routes/About';
import Setting from './routes/Setting';

const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/:Home" component={Home}/>
                <Route  path="/:About" component={About}/>
                <Route  path="/:Setting" component={Setting}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;