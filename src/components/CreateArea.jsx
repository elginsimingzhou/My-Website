import React, {useState} from "react";

function CreateArea(props){

    const [post, setPost]= useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value}= event.target

        setPost(prevPost => {
            return({
                ...prevPost,
                [name]:value
            });
        });

    }

    function handleClick(event){
        props.onAdd(post);
        setPost({
            title: "",
            content: ""
        });

        event.preventDefault();

    }

    return(
        <div>
            <form>
                <input
                    name = "title"
                    onChange = {handleChange}
                    value = {post.title}
                    placeholder="Title"
                />
                <textarea
                    name = "content"
                    onChange= {handleChange}
                    value = {post.content}
                    placeholder="Write content"
                    rows = "10"
                />
                <button onClick= {handleClick}>Add</button>
            </form>
        </div>
    )



}

export default CreateArea;