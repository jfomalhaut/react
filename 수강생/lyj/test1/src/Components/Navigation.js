import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="nav">
            <ul>
                <li>
                    <NavLink exact to="/home">Home</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/about/:data">About</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/setting/:data">Setting</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;