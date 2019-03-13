import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = React.memo(() => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
                <li className="nav-item"><NavLink to="/articles" className="nav-link" activeClassName="active">Articles</NavLink></li>
                <li className="nav-item"><NavLink to="/tree" className="nav-link" activeClassName="active">Tree View</NavLink></li>
            </ul>
        </nav>
    );
});

export default NavBar;
