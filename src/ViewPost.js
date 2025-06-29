import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams, Link } from "react-router-dom";


function ViewPost({ posts, handleDelete }) {
  // debugger;
  const navigate = useNavigate();
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  useEffect(() => {
    if (!post) {
      navigate("/");
    }
  }, [posts, navigate]);

  if (!post) {
    return;
  }

  return (
    <div>
      <section className="viewPost">
        <h2>{post.title}</h2>
        <p>{post.date}</p>
        <p>{post.body}</p>
        <Link to={`/editPost/${post.id}`}>
          <button className="editPost">
            Edit
          </button>
        </Link>
        <button className="deletePost" onClick={() => handleDelete(post.id)}>
          Delete
        </button>
      </section>
    </div>
  );
}

export default ViewPost;
