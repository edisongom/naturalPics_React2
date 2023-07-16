import React from "react";
import "../styles.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" end> Home </NavLink>
            <NavLink to="/favs"> Favs </NavLink>
        </nav>
    );
};

export default Navbar;
