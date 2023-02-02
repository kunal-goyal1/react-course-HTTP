import React, { useRef } from "react";

import "./AddPost.css";

function AddPost(props) {
    const titleRef = useRef("");
    const bodyRef = useRef("");

    function submitHandler(event) {
        event.preventDefault();

        // could add validation here...

        const post = {
            title: titleRef.current.value,
            body: bodyRef.current.value,
        };

        props.onAddPost(post);
    }

    return (
        <form onSubmit={submitHandler} className="form">
            <div className="control">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={titleRef} />
            </div>
            <div className="control">
                <label htmlFor="body">Body</label>
                <input type="text" id="body" ref={bodyRef} />
            </div>
            <button className="add-post">Add Post</button>
        </form>
    );
}

export default AddPost;
