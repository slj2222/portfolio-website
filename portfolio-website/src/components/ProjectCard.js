import React from "react";
import gitHub from"../gitHub.png"

export default function ProjectCard({ project }) {

    return (
        <div className="blog-card">
            <div className="blog-card-contents">
                <div>
                    <iframe src={project.url}
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                    />
                </div>
                <div>
                    <h4>
                        {project.project_name}
                    </h4>
                </div>
                <div>
                    <p>
                        {project.description}
                    </p>
                </div>
                <div>
                    <a href={project.git_link}>
                        <img className="github-logo" src={gitHub} alt="gitHub logo"></img>
                    </a>
                </div>
            </div>

        </div>
    )
}