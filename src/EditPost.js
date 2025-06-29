import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function EditPost({
  editTitleValue,
  setEditTitleValue,
  editDescValue,
  setEditDescValue,
  posts,
  handleEdit
}) {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));
  
  useEffect(()=>{
    setEditTitleValue(post.title);
    setEditDescValue(post.body);
  },[])

  return (
    <div className="editContainer">
      <form className="editPostForm" onSubmit={(e)=>handleEdit(e,post.id)}>
        <h3 style={{ textAlign: "center" }}>Edit Form</h3>
        <label>Title : </label>
        <input
          className="title"
          type="text"
          value={editTitleValue}
          onChange={(e) => setEditTitleValue(e.target.value)}
          placeholder="Add a title"
          required
        />

        <label>Desc : </label>
        <textarea
          className="desc"
          type="text"
          value={editDescValue}
          onChange={(e) => setEditDescValue(e.target.value)}
          placeholder="Share your thoughts...."
          required
        />

        <button className="submitBtn" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default EditPost;
