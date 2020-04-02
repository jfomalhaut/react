import React from 'react';
import List from './routers/List';
import Cart from './routers/Cart';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


const App = () => {
    const length = useSelector(({ cartReducer }) => {
        return cartReducer.cart.length;
    });

    return (
        <BrowserRouter>
            <header>
                <h1>장바구니: {length}</h1>
            </header>
            <ul>
                <li>
                    <Link to="/list">상품리스트</Link>
                    <Link to="/cart">장바구니</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/list" exact component={List}/>
                <Route path="/cart" component={Cart}/>
                <Redirect path="*" to="/list"/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;