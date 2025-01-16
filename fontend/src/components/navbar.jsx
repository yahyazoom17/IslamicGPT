import React from "react";
import logo from "../mosque-solid.svg"

const Navbar = () => {
    return(
        <nav className="navbar shadow-sm bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand h1 mb-0" href="#">
                <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                <span className="mx-2">IslamicGPT</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;