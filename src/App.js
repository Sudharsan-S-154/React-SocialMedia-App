import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import AddPost from "./AddPost";
import "./index.css";
// import PostLayout from "./PostLayout";
import Nav from "./Nav";
import Footer from "./Footer";
import { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
import About from "./About";
import ViewPost from "./ViewPost";
import api from "./RequestHandling";
import EditPost from "./EditPost";
import useScreenIcon from "./hooks/useScreenIcon.js";
import DataContext, { DataProvider } from "./Context/DataContext.js";

function App() {
  const { searchBox, posts } = useContext(DataContext);
  return (
    <div className="container">
        <Header />
        <Nav />
        <Routes className="mainBox">
          <Route
            path="/"
            element={
              <Main
                posts={posts.filter((post) =>
                  post.title.toLowerCase().includes(searchBox.toLowerCase())
                )}
              />
            }
          />
          <Route path="/addPost">
            <Route index element={<AddPost />} />
            <Route path=":id" element={<ViewPost />} />
          </Route>
          <Route path="/editPost/:id" element={<EditPost />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
