import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigate = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact={true} to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/setting">Setting</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigate;