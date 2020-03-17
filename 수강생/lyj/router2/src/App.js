import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Routes/Home';
import List from './Routes/List';
import Detail from './Routes/Detail';
import Navigation from './components/Navigation';


const App = () => {
    return (
        <BrowserRouter>
        <Navigation/>
            <Switch>
                <Route path="/" component={Home}/>
                <Route path="/list" component={List}/>
                <Route path="/detail" component={Detail}/>
                <Redirect path="*" to="/"/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;