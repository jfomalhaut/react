import React from 'react';
import { BrowserRouter, Switch, NavLink, Redirect, Route } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Setting from './Routes/Setting';
import './App.css';
import Navigation from './Components/Navigation';


const App = () => {
    return (
        <BrowserRouter>
          <Navigation />
             <Switch>
                <Route path="/home" exact  component={Home}/> 
                <Route path="/about" component={About}/>
                <Route path="/setting" component={Setting}/>
                <Redirect path="*" to="/"/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;