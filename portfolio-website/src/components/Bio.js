import React from "react";
import pic from "../pic.jpeg"

export default function Bio() {
    return (
        <div className="bio">

            <div className="bio-image">
                <img className="bio-image" src={pic} alt="profile pic" />
            </div>
            <div className="bio-content">
                <div>
                    <h2>Background</h2>
                    
                    <div className="bio-detail">
                        <p className="bio-container">
                            I went to Missouri State University on a baseball scholarship, where I started all four years for the Bears, while also majoring in Physics/Engineering and Applied Physics. After four years of dedication and hard work, I ended up getting drafted in the 16th round of the MLB draft by the Houston Astros. During my time in the Astros minor league system, I managed to play on their A, AA, and AAA teams.
                            When my professional baseball career ended, I went back to school to finish my Physics degree. After graduation, I had a sales opportunity that led to me moving to Denver, CO. My sales career was challenging, yet rewarding. I made top 20 reps in the company my first full year as an Account Executive. I enjoyed my work. However, I was always interested in doing something more creative. When I discovered software development, I became very passionate about persuing a new career - becoming a software engineer. I immediately enrolled in Flatiron School's Full Stack Web Development program and over the past few months I have definitely been able to flex my creative muscles. Now that the program is over, my goal is to start my career with a company that will help me grow and maximumize my potential as a developer.
                        </p>
                    </div>
                </div>
                <div>
                    <h2>Work Experience</h2>
                    <div className="work-detail">
                        <h5>Unishippers</h5>
                        <h5>-</h5>
                        <p> National Account Executive</p>
                    </div>
                    <div className="bio-detail">
                        <h5>Houston Astros</h5>
                        <h5>-</h5>
                        <p>Professional Baseball Player</p>
                    </div>
                </div>
                <div className="bio-part">
                    <h2>Education</h2>
                    <div className="education-detail">
                        <h5>Flatiron School</h5>
                        <h5>-</h5>
                        <p>Full Stack Web Development, Ruby on Rails and JavaScript program</p>
                    </div>
                    <div className="bio-detail">
                        <h5>Missouri State University</h5>
                        <h5>-</h5>
                        <p>Bachelor of Science, Physics/Engineering and Applied Physics, Minor in Mathematics</p>

                    </div>
                </div>

                <div className="bio-part">
                    <h2>Hobbies</h2>
                    <p>I enjoy golfing, playing my guitar, attending concerts, mountain biking, snowboarding, driving my jeep around with the top off, and walking my dog, Moose!  </p>
                </div>
            </div>

        </div>
    )
}
