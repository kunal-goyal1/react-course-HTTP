import React from "react";

import Post from "./Post";
import "./PostList.css";

const MovieList = (props) => {
    return (
        <ul className="post-list">
            {props.posts.map((post) => (
                <Post key={post.id} title={post.title} body={post.body} />
            ))}
        </ul>
    );
};

export default MovieList;
