import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink} from 'react-router-dom';
// import './Navigation.css';

const Navigation = () => {
    return (
        <div className="menu">
            <div className="menu_t">
                <li className="menu_li">
                    <NavLink activeClassName="active" exact={true} to="/">전체 카테고리</NavLink>
                </li>
                <li className="menu_li">
                    <NavLink activeClassName="active" exact={true} to="/new">신상품</NavLink>
                </li>
                <li className="menu_li">
                    <NavLink activeClassName="active" exact={true} to="/best">베스트</NavLink>
                </li>
                <li className="menu_li">
                    <NavLink activeClassName="active" exact={true} to="/">알뜰쇼핑</NavLink>
                </li>
                <li className="menu_li">
                    <NavLink activeClassName="active" exact={true} to="/event">이벤트</NavLink>
                </li>
            </div>
            <li>
                <input type="text" className="searchbar"></input>
            </li>
            <li className="cart">
                <NavLink activeClassName="active" exact={true} to="/cart"></NavLink>
            </li>
        </div>
    );
};


export default Navigation;