import React from "react";
import { Link } from "react-router-dom";
import gitHubWhite from "../gitHub-white.png"
import linkedInWhite from "../linkedIn-white.png"
import dev from "../dev.png"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-internal-links">
            <Link to="/">
                <div className="navbar-icon">
                    Bio
                </div>
            </Link>
            <Link to="/projects">
                <div className="navbar-icon">
                    Projects
                </div>
            </Link>
            <Link to="/blogs">
                <div className="navbar-icon">
                    Blog Posts
                </div>
            </Link>
            <Link to="/contact">
                <div className="navbar-icon">
                    Contact Me
                </div>
            </Link>
            </div>
            <div className="nav-external-links">
                <div>
                    <a className="navbar-icon" href="https://www.linkedin.com/in/slj2222/">
                        <img className="github-logo" src={linkedInWhite} alt="linkedIn logo"></img>
                    </a>
                </div>
                <div>
                    <a className="navbar-icon" href="https://github.com/slj2222">
                        <img className="github-logo" src={gitHubWhite} alt="gitHub logo"></img>
                    </a>
                </div>
            
            </div>
        </div>
    )
}

