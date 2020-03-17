import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/list">LIST</NavLink>
                </li>
                <li>
                    <NavLink to="/detail">DETAIL</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;