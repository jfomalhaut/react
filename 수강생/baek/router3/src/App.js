import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from '../../router/src/routes/Home';
import List from '../../router/src/routes/List';
import Detail from '../../router/src/routes/Detail';

const App = () =>{
    return(
        <BrowserRouter>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/List" component={List}/>
            <Route path="/Detail:id" component={Detail}/>
            <Redirect path="*" to="/"/>
        </BrowserRouter>
    )
}

export default App;