import React from "react";
import "./Styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="brand">
                <Link to="/">JukeBox</Link>
            </div>
            <div className="navbar-links">
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/signin">Signin</Link></li> 
                    <li><Link to="/signup">Signup</Link></li> 
                    <li><Link to="/shop">Shop</Link></li>                     
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;