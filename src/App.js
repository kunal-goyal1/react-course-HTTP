import React, { useState, useEffect, useCallback } from "react";
import AddPost from "./components/AddPost";

import PostList from "./components/PostList";
import "./App.css";

function App() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    let content = <p>found no posts</p>;
    if (posts.length > 0) {
        content = <PostList posts={posts} />;
    }
    if (error) {
        content = <p>something went wrong</p>;
    }
    if (isLoading) {
        content = <p>loading...</p>;
    }

    const fetchPostsHandler = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            if (!response.ok) {
                throw new Error("something went wrong");
            }
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchPostsHandler();
    }, [fetchPostsHandler]);

    const addPosthandler = (postData) => {
        console.log(postData);
    };

    return (
        <React.Fragment>
            <AddPost onAddPost={addPosthandler}></AddPost>
            <section>
                <button onClick={fetchPostsHandler}>Fetch Posts</button>
            </section>
            <section>{content}</section>
        </React.Fragment>
    );
}

export default App;
