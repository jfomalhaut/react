import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
        {/* exact={true} 가장 메인이 되는 페이지 */}
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