import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {

    const projects = [ 
        {
            url: "https://www.youtube.com/embed/jB0Z-Mvb9H8", 
            project_name: "Landscapr", 
            git_link: "https://github.com/slj2222/Landscapr-Final-Project",
            description: "A client and invoice tracker, designed for a lawn care business, that allows you to manage your clients, your client’s properties, and associated invoices."
        }, 
        { 
            url: "https://www.youtube.com/embed/lHEX7qGgj3E", 
            project_name: "Zound'd", 
            git_link: "https://github.com/charliekozey/phase-4-music-review-project",
            description: "A music review / social media site that allows users to create reviews of artist’s albums."
        }, 
        { 
            url: "https://www.youtube.com/embed/Na3oXFq0u_U", 
            project_name: "Community Fridge Finder", 
            git_link: "https://github.com/slj2222/phase-3-react-project", 
            description: "An app that allows users to add/edit/remove contents in community fridges in NYC."
        }
    ]

    const mapProjects = projects.map(project => <ProjectCard key={project.project_name} project={project} />)
   
    return (
        <div className="blog-container">
            {mapProjects}
            
        </div>
    )
}