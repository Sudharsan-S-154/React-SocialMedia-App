import React from "react";

function AddPost() {
  return (
    <div>
      <form className="addPost">
        <label>Title : </label>
        <input type="text" />

        <label>Desc : </label>
        <input type="text" />
        
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default AddPost;
