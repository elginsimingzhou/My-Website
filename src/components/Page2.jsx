import React, { useState } from "react"
import {Link} from "react-router-dom";
import Post from "./Post";
import CreateArea from "./CreateArea"


function Page2(){

    const [posts, setPosts]=useState([]);

    function addPost(newPost){
        setPosts(prevPosts => {
            return [...prevPosts, newPost]
        });

    }

    return (
    <div>
        <Link to="/">home</Link>
        <h1>Project Posts</h1>
        <CreateArea onAdd = {addPost}></CreateArea> 
        {posts.map((postItem, index)=> {
            return(
                <Post
                key={index}
                id = {index}
                title = {postItem.title}
                content = {postItem.content}
                ></Post>
        ); 
        })}
    </div>
    );
}


export default Page2;