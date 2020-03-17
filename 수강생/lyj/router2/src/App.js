import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home}/>
                <Route path="/list" component={List}/>
                <Route path="/detail" component={Detail}/>
                <Redireac path="*" to="/"/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;