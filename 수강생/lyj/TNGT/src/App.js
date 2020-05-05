import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { Home, About, Shop, Outlet, Magazin, Event, Store, Login, Join, Search, Cart, ItemPage } from './Routers';
 // index.js가 routers폴더 안에 있으므로 Routers까지만 경로를 잡아주고 중괄호 안에 이름 그대로 넣어준다.
import imageURI from './globals/imageURI';
import './App.css';

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
                                <li className="about_btn">
                                    <Link to="/about">
                                        ABOUT
                                        <div className="about_line" />
                                    </Link>
                                    <div className="header_hover about">
                                        <div className="hover about">
                                            <div className="h_text about">
                                                <div className="h_tit about">
                                                    <span>About</span>
                                                </div>
                                                <div className="h_dec about">
                                                    <span className="dec1">
                                                        About TNGT
                                                        <div className="dec_line l1" />
                                                    </span>
                                                    <span className="dec2">
                                                        About SIGNAL
                                                        <div className="dec_line l2" />
                                                    </span>
                                                    <span className="dec3">
                                                        NEWS
                                                        <div className="dec_line l3" />
                                                    </span>
                                                    <span className="dec4">
                                                        CATALOGUE
                                                        <div className="dec_line l4" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="h_img about">
                                                <img src={`${imageURI['ex']}`} />
                                                <span>[NAVY]오버핏 배색 후드 자켓</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="shop_btn">
                                    <Link to="/shop">
                                        SHOP
                                        <div className="shop_line" />
                                    </Link>
                                    <div className="header_hover shop">
                                        <div className="hover shop">
                                            <div className="h_text shop">
                                                <div className="h_tit shop">
                                                    <span>Shop</span>
                                                </div>
                                                <div className="h_dec shop">
                                                    <span className="dec1">
                                                        ALL
                                                        <div className="dec_line i1" />
                                                    </span>
                                                    <span className="dec2">
                                                        OUTER
                                                        <div className="dec_line i2" />
                                                    </span>
                                                    <span className="dec3">
                                                        TOP
                                                        <div className="dec_line i3" />
                                                    </span>
                                                    <span className="dec4">
                                                        BOTTOM
                                                        <div className="dec_line i4" />
                                                    </span>
                                                    <span className="dec5">
                                                        ACC
                                                        <div className="dec_line i5" />
                                                    </span>
                                                    <span className="dec6">
                                                        SUIT
                                                        <div className="dec_line i6" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="h_img shop">
                                                <img src={`${imageURI['ex']}`} />
                                                <span>[NAVY]오버핏 배색 후드 자켓</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="outlet_btn">
                                    <Link to="/outlet">
                                        OUTLET
                                        <div className="outlet_line" />
                                    </Link>
                                    <div className="header_hover outlet">
                                        <div className="hover outlet">
                                            <div className="h_text outlet">
                                                <div className="h_tit outlet">
                                                    <span>Outlet</span>
                                                </div>
                                                <div className="h_dec outlet">
                                                    <span className="dec1">
                                                        ALL
                                                        <div className="dec_line i1" />
                                                    </span>
                                                    <span className="dec2">
                                                        OUTER
                                                        <div className="dec_line i2" />
                                                    </span>
                                                    <span className="dec3">
                                                        TOP
                                                        <div className="dec_line i3" />
                                                    </span>
                                                    <span className="dec4">
                                                        BOTTOM
                                                        <div className="dec_line i4" />
                                                    </span>
                                                    <span className="dec5">
                                                        ACC
                                                        <div className="dec_line i5" />
                                                    </span>
                                                    <span className="dec6">
                                                        SUIT
                                                        <div className="dec_line i6" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="h_img outlet">
                                                <img src={`${imageURI['ex']}`} />
                                                <span>[NAVY]오버핏 배색 후드 자켓</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="magazin_btn">
                                    <Link to="/magazin">
                                        MAGAZIN
                                        <div className="magazin_line" />
                                    </Link>
                                    <div className="header_hover magazin">
                                        <div className="hover magazin">
                                            <div className="h_text magazin">
                                                <div className="h_tit magazin">
                                                    <span>Magazin</span>
                                                </div>
                                                <div className="h_dec magazin">
                                                    <span className="dec1">
                                                        TNGT LOOK
                                                        <div className="dec_line n1" />
                                                    </span>
                                                    <span className="dec2">
                                                        TNGT LAB
                                                        <div className="dec_line n2" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="h_img magazin">
                                                <img src={`${imageURI['ex']}`} />
                                                <span>[NAVY]오버핏 배색 후드 자켓</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="event_btn">
                                    <Link to="/event">
                                        EVENT
                                        <div className="event_line" />
                                    </Link>
                                    <div className="header_hover event">
                                        <div className="hover event">
                                            <div className="h_text event">
                                                <div className="h_tit event">
                                                    <span>Event</span>
                                                </div>
                                                <div className="h_dec event">
                                                    <span className="dec1">
                                                        PROMOTION
                                                        <div className="dec_line e1" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="h_img event">
                                                <img src={`${imageURI['ex']}`} />
                                                <span>[NAVY]오버핏 배색 후드 자켓</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="store_btn">
                                    <Link to="/store">
                                        STORE
                                        <div className="store_line" />
                                    </Link>
                                    <div className="header_hover store">
                                        <div className="hover store">
                                            <div className="h_text store">
                                                <div className="h_tit store">
                                                    <span>Event</span>
                                                </div>
                                                <div className="h_dec store">
                                                    <span className="dec1">
                                                        매장찾기
                                                        <div className="dec_line ee1" />
                                                    </span>
                                                    <span className="dec2">
                                                        매장개설안내
                                                        <div className="dec_line ee2" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="h_img store">
                                                <img src={`${imageURI['ex']}`} />
                                                <span>[NAVY]오버핏 배색 후드 자켓</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="topLeft">
                                <li>
                                    <Link to="/login">LOGIN</Link>
                                </li>
                                <li>
                                    <Link to="/join">JOIN</Link>
                                </li>
                                <li className="search_glass">
                                    <Link to="/search">
                                        <img className="glass_img" src={`${imageURI['glass']}`} />
                                    </Link>
                                    <div className="header_hover_glasses">
                                        <div className="search_box">
                                            <input className="search" placeholder="검색어를 입력하세요" autoFocus="on" />
                                            <img className="glass_big_img" src={`${imageURI['glass2']}`} />
                                        </div>
                                    </div>
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
                <Route path="/shop/:type" component={Shop} /> 
                <Route path="/outlet" component={Outlet} />
                <Route path="/magazin" component={Magazin} />
                <Route path="/event" component={Event} />
                <Route path="/store" component={Store} />
                <Route path="/login" component={Login} />
                <Route path="/join" component={Join} />
                <Route path="/search" component={Search} />
                <Route path="/cart" component={Cart} />
                <Route path="/itemPage" component={ItemPage} />
                <Redirect path="*" to="/home" />
            </Switch>
        </BrowserRouter>
    );
    // /shop/:type
};

export default App;