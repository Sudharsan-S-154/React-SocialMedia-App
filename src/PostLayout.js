import React from "react";
import { Link, Outlet } from "react-router-dom";
import AddPost from "./AddPost";

const PostLayout = () => {
  return (
    <div className="postLayout">
      <AddPost />
    </div>
  );
};

export default PostLayout;
