import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from '../../router3/src/routes/Home';
import List from '../../router3/src/routes/List';
import Detail from '../../router3/src/routes/Detail';
import Navigation from './components/Navigation';

const App = () =>{
    return(
        <BrowserRouter>
            <Navigation/>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/List" component={List}/>
                <Route path="/Detail:id" component={Detail}/>
                <Redirect path="*" to="/"/>
        </BrowserRouter>
    )
}

export default App;