import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function ViewPost({ posts, handleDelete }) {
  debugger
  const navigate = useNavigate();
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));
  if (!post) {
    return navigate("/");
  }
  return (
    <div>
      <section className="viewPost">
        <h2>{post.title}</h2>
        <p>{post.date}</p>
        <p>{post.body}</p>
        <button className="deletePost" onClick={() => handleDelete(post.id)}>
          Delete
        </button>
      </section>
    </div>
  );
}

export default ViewPost;
