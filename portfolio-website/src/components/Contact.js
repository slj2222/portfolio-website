import React from "react";
import gitHub from "../gitHub.png"
import linkedIn from "../linkedIn2.png"
import dev from "../dev.png"

export default function Contact() {
    return (
        <div>
            <h2> Contact Information</h2>
            <div>
            <div className="contact-detail">
                <span className="info">
                    <h4>Spencer Johnson</h4>
                </span>
                <span className="info">
                    <h4>417-209-5022</h4>
                </span>
                <span className="info">
                    <h4>
                        <a href="mailto: sljohnson2222@gmail.com">sljohnson2222@gmail.com</a>
                    </h4>
                </span>
            </div>
            <div className="bio-detail">
                <a className="links" href="https://www.linkedin.com/in/slj2222/">
                <img className="github-logo" src={linkedIn} alt="linkedIn logo"></img>
                </a>
            </div>
            <div className="bio-detail">
                <a className="links" href="https://github.com/slj2222">
                    <img className="github-logo" src={gitHub} alt="gitHub logo"></img>
                </a>
            </div>
            <div className="bio-detail">
                <a className="links" href="https://dev.to/slj2222">
                <img className="github-logo" src={dev} alt="dev.to logo"></img>
                </a>
            </div>
            </div>
        </div>
    )
}