import React, { useState } from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";
import "./PostList.css";

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (title, content) => {
    setPosts([...posts, { id: posts.length + 1, title, content }]);
  };

  return (
    <div className="container">
      <h1>Create post</h1>
      <PostCreate addPost={addPost} />
      <hr />
      <h2>all posts</h2>
      <PostList posts={posts} />
    </div>
  );
};

export default App;

