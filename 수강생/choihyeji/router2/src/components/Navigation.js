import React from 'react'
import { NavLink } from 'react-router-dom'

const Navagation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName="active" exact={true} to="/">Home</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;