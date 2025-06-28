import React from "react";
import {Link} from "react-router-dom"

function Post({ posts = [] }) {
  return (
    <div>
      {posts.map((post, index) => (
        <section key={index} className="posts">
          <Link className="link1" to={`/addPost/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.date}</p>
          <p>{post.body}</p>
          <hr />
        </section>
      ))}
    </div>
  );
}

export default Post;
