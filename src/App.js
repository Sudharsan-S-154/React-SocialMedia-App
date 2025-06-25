import { Routes, Route, Link, Router } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import AddPost from "./AddPost";
import "./index.css";
import Post from "./Post";
// import PostLayout from "./PostLayout";
import Nav from "./Nav";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "Japan vlogs",
      date: "April 20th, 2025 10.00AM",
      body: "Japan is a top-tier tourist destination known for its unique blend of ancient tradition.",
    },
    {
      id: 2,
      title: "America vlogs",
      date: "May 23th, 2025 12.00PM",
      body: "The United States is one of the most diverse and dynamic travel destinations in the world.",
    },
    {
      id: 3,
      title: "Norway vlogs",
      date: "Dec 7th, 2025 09.00PM",
      body: "Norway is a breathtaking destination known for its dramatic fjords, northern lights, Viking heritage.",
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main posts={posts} />} />
        <Route path="/addPost" element={<AddPost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
