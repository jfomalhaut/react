import React from 'react'
import { BrowserRouter, Switch, Redirect, Link } from 'react-router-dom'
import List from './routers/List'
import Cart from './routers/cart'


const App2 = () => {
    return(
        <BrowserRouter>
            <header>
                <h1>장바구니 : {length}</h1>
            </header>
            <ul>
                <li>
                    <Link to = "/list">상품리스트</Link>
                    <Link to = "/cart">장바구니</Link>
                </li>
            </ul>
            <Switch>
                <Route path = "/list" exact component={List}/>
                <Route path = "/cart"  component={Cart}/>
                <Redirect path ="*" to="/list"/>
            </Switch>
        </BrowserRouter>

    )
}

export default App2;