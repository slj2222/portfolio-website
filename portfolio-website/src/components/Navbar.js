import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">
                <div className="navbar-icon">
                    Home
                </div>
            </Link>
            <Link to="/bio">
                <div className="navbar-icon">
                    Bio
                </div>
            </Link>
            <Link to="/projects">
                <div className="navbar-icon">
                    Projects
                </div>
            </Link>
            <Link to="/contact">
                <div className="navbar-icon">
                    Contact Me
                </div>
            </Link>
        </div>
    )
}

