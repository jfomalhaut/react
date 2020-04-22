import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { Home, About, Shop, Outlet, Magazin, Event, Store, Login, Join, Search, Cart } from './Routers';
 // index.js가 routers폴더 안에 있으므로 Routers까지만 경로를 잡아주고 중괄호 안에 이름 그대로 넣어준다.
import './App.css';
import imageURI from './globals/imageURI';

const App = () => {
    return (
        <BrowserRouter>
            <header>
                <div className="top">
                    <div className="nav">
                        <ul className="topRight">
                            <li>
                                <Link to="/home">
                                    <img src={`${imageURI['logo']}`} />
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">ABOUT</Link>
                            </li>
                            <li>
                                <Link to="/shop">SHOP</Link>
                            </li>
                            <li>
                                <Link to="/outlet">OUTLET</Link>
                            </li>
                            <li>
                                <Link to="/magazin">MAGAZIN</Link>
                            </li>
                            <li>
                                <Link to="/event">EVENT</Link>
                            </li>
                            <li>
                                <Link to="/store">STORE</Link>
                            </li>
                        </ul>
                        <ul className="topLeft">
                            <li>
                                <Link to="/login">LOGIN</Link>
                            </li>
                            <li>
                                <Link to="/join">JOIN</Link>
                            </li>
                            <li>
                                <Link to="/search">
                                    <img className="glass_img" src={`${imageURI['glass']}`} />
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart">
                                    <img className="cart_img" src={`${imageURI['cart1']}`} />
                                    <span className="cart_text">0</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/shop" component={Shop} />
                <Route path="/outlet" component={Outlet} />
                <Route path="/magazin" component={Magazin} />
                <Route path="/event" component={Event} />
                <Route path="/store" component={Store} />
                <Route path="/login" component={Login} />
                <Route path="/join" component={Join} />
                <Route path="/search" component={Search} />
                <Route path="/cart" component={Cart} />
                <Redirect path="*" to="/home" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;