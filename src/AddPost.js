import React, { useContext } from "react";
import DataContext from "./Context/DataContext";

function AddPost() {
  const { titleValue, setTitleValue, descValue, setDescValue ,handleSubmit} = useContext(DataContext);
  return (
    <div className="postContainer">
      <form className="addPostForm" onSubmit={handleSubmit}>
        <label>Title : </label>
        <input
          className="title"
          type="text"
          value={titleValue}
          onChange={(e)=>setTitleValue(e.target.value)}
          placeholder="Add a title"
          required
        />

        <label>Desc : </label>
        <textarea
          className="desc"
          type="text"
          value={descValue}
          onChange={(e)=>setDescValue(e.target.value)}
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

export default AddPost;
