import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowNavLink } from 'react-router-dom';
import Navigation from './component/Navigation';
// import './App.css';


const App = () => {
    return (
        <BrowserRouter>
            <div className="header">
                <div className="h_top">
                    <img className="ht_del" src="https://res.kurly.com/pc/service/common/1908/delivery_190819.gif"></img>
                    <div className="ht_menu">
                        <li className="ht_li">회원가입</li>
                        <li className="ht_li">로그인</li>
                        <li className="ht_li">고객센터</li>
                        <li className="ht_li">배송지역 검색</li>
                    </div>
                </div>
                <div className="logo"></div>
            <Navigation/>
            </div>
        </BrowserRouter>
    );
};

export default App;