import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">
                <div>
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
            {/* <div className="navbar-icon">
                Hobbies??
            </div> */}
        </div>
    )
}

