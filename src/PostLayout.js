import React from "react";
import { Link, Outlet } from "react-router-dom";

const PostLayout = () => {
  return (
    <div>
      <Link to="/allPost/1">Post 1</Link> <br />
      <br />
      <Link to="/allPost/2">Post 2</Link> <br />
      <br />
      <Link to="/allPost/3">Post 3</Link>
      <Outlet />
    </div>
  );
};

export default PostLayout;
