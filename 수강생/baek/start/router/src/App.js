import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './routes/Home';
import List from './routes/List';
import Detail from './routes/Detail';


const App =() => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" excat component={Home}/>
                <Route path="/list" component={List}/>
                <Route path="/detail" component={Detail}/>
                <Redirect path="*" to ="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;