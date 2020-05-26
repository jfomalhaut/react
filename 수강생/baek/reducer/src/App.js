import React, { useReducer } from 'react';
import {BrowserRouter, Switch, Route, Redirect, Link} from 'react-router-dom';
import Page1 from './router/Page1';
import Page2 from './router/Page2';
import Page3 from './router/Page3';
import UrlReducer from './reducer/UrlReducer';
import AppContext from './contexts/AppContext';

const initialState = {
    url:''
}

function App(){
    const [ state, dispatch ] = useReducer(UrlReducer, initialState);

    return(
        <BrowserRouter>
            <header>
                <Link to="/page1" style = {{ color: state.url === 'page1' ? 'red' : 'black'}}> Page1</Link>
                <Link to="/page2" style = {{ color: state.url === 'page2' ? 'red' : 'black'}}> page2</Link>
                <Link to="/page3" style = {{ color: state.url === 'page3' ? 'red' : 'black'}}> page3</Link>
                <h1 style={{color : 'red'}}>{state.url}</h1>
            </header>
            <Switch>
                <AppContext.Provider value={{ state, dispatch }}>
                    <Route path="/page1" component={ Page1 } />
                    <Route path="/page2" component={ Page2 } />
                    <Route path="/page3" component={ Page3 } />
                </AppContext.Provider>
                    <Redirect path="*" to="/page1" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;