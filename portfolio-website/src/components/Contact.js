import React from "react";

export default function Contact() {
    return (
        <div>
            <h2> Contact Information</h2>
            <div>
            <div className="bio-detail">
                <h5>Name</h5>
                <h5>-</h5>
                <p>Spencer Johnson</p>
            </div>
            <div className="bio-detail">
                <h5>Phone</h5>
                <h5>-</h5>
                <p>417-209-5022</p>
            </div>
            <div className="bio-detail">
                <h5>Email</h5>
                <h5>-</h5>
                <a href="mailto: sljohnson2222@gmail.com">sljohnson2222@gmail.com</a>
            </div>
            <div className="bio-detail">
                <h5>LinkedIn</h5>
                <h5>-</h5>
                <a href="https://www.linkedin.com/in/slj2222/">https://www.linkedin.com/in/slj2222/</a>
            </div>
            <div className="bio-detail">
                <h5>GitHub</h5>
                <h5>-</h5>
                <a href="https://github.com/slj2222">https://github.com/slj2222</a>
            </div>
            <div className="bio-detail">
                <h5>Dev.to</h5>
                <h5>-</h5>
                <a href="https://dev.to/slj2222">https://dev.to/slj2222</a>
            </div>
            </div>
        </div>
    )
}