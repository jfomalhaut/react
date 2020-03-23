import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="menu">
            <li>
                <NavLink className="menu_li" activeClassName="active" exact={true} to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="menu_li" activeClassName="active" to="/about">About</NavLink>
            </li>
            <li>
                <NavLink className="menu_li" activeClassName="active" to="/setting">Setting</NavLink>
            </li>
        </div>
    )
};

export default Navigation;