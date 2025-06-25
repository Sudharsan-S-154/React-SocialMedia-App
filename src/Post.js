import React from "react";

function Post({posts=[]}) {
  return (
    <div>
      {posts.map((post,index) => (
        <section key={index} className="posts">
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          <p>{post.body}</p>
          <hr />
        </section>
      ))}
    </div>
  );
}

export default Post;
