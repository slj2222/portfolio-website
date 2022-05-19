import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";


export default function Blogs() {

    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        fetch('https://dev.to/api/articles?username=slj2222')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBlogs(data)
            })
    }, [])

    const mapBlogs = blogs.map(blog => {
        return <BlogCard key={blog.id} blog={blog} />
    })
        return (
        <div className="blog-container">
            {mapBlogs}
        </div>
    )
}