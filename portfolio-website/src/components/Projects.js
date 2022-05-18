import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {

    const projects = [ 
        {
            url: "https://www.youtube.com/embed/jB0Z-Mvb9H8", 
            project_name: "Landscapr", 
            git_link: "https://github.com/slj2222/Landscapr-Final-Project"
        }, 
        { 
            url: "https://www.youtube.com/embed/lHEX7qGgj3E", 
            project_name: "Zound'd", 
            git_link: "https://github.com/charliekozey/phase-4-music-review-project" 
        }, 
        { 
            url: "https://www.youtube.com/embed/Na3oXFq0u_U", 
            project_name: "Community Fridge Finder", 
            git_link: "https://github.com/slj2222/phase-3-react-project" 
        }
    ]

    const mapProjects = projects.map(project => <ProjectCard key={project.project_name} project={project} />)
   
    return (
        <div className="blog-container">
            {mapProjects}
            
        </div>
    )
}