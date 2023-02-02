import React from "react";

import "./Post.css";

const Movie = (props) => {
    return (
        <li className="post">
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </li>
    );
};

export default Movie;
