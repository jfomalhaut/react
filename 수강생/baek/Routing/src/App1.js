import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './routers/Home';
import Setting from './routers/Setting';
import About from './routers/About';

const App1 = ({match}) => {

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/home' component={Home}/>
                <Route  path='/setting/:data' component={Setting}/>
                <Route  path='/about/:data' component={About}/>
                <Redirect path="*" to="/home"/>
            </Switch>
        </BrowserRouter>
    )
}

export default App1;