import React from "react";
import Post from "./Post";

function Main({ posts }) {
  return <>{posts.length > 0 ? <Post posts={posts} /> : <p>No posts are avialable</p>}</>;
}

export default Main;
