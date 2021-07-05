import React from "react"
import {Link} from "react-router-dom";
import Post from "./Post";
import posts from "../posts.js";


function Page2(){
    return (
    <div>
        <Link to="/">home</Link>
        <h1>Project Posts</h1>
        {posts.map(post => (<Post 
        key={post.key}
        title = {post.title}
        content = {post.content}
        />
        ))}
    </div>
    )
}


export default Page2;