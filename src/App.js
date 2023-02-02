import React from "react";

import PostList from "./components/PostList";
import "./App.css";

function App() {
    const dummyPosts = [
        {
            id: Math.random().toString(),
            title: "Some Dummy Post",
            body: "This is a great Post 1",
        },
        {
            id: Math.random().toString(),
            title: "Some Dummy Post2",
            body: "This is a great Post 2",
        },
    ];

    return (
        <React.Fragment>
            <section>
                <button>Fetch Posts</button>
            </section>
            <section>
                <PostList posts={dummyPosts} />
            </section>
        </React.Fragment>
    );
}

export default App;
