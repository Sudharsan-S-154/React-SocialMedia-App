import React from "react";
import Post from "./Post";

function Main({ posts }) {
  return (
    <>
      <Post posts={posts} />
    </>
  );
}

export default Main;
