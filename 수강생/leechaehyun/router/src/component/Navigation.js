import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';


const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName="active" exact={true} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/list">List</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/detail">Detail</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/detail2">Detail2</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;