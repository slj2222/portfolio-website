import React from "react";

export default function BlogCard({ blog }) {
    return (
        <div className="blog-card">
            <a href={blog.url}>
                <div className="blog-card-contents">
                    <div>
                        <img src={blog.cover_image} alt="" className="blog-image"/>
                    </div>
                    <div>
                        <h4>
                        {blog.title}
                        </h4>
                    </div>
                    <div>
                        <p>{blog.description}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}