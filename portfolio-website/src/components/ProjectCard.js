import React from "react";

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
                    <a href={project.git_link}>
                        <h5>gitHub</h5>
                    </a>
                </div>
            </div>

        </div>
    )
}