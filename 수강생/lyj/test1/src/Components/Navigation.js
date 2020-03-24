import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="nav">
            <ul>
                <li>
                    <NavLink activeclassName="active" exact to="/">Home</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink activeclassName="active" to="/about">About</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink activeclassName="active" to="/setting">Setting</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;