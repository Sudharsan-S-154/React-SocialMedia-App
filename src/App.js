import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import AddPost from "./AddPost";
import "./index.css";
// import PostLayout from "./PostLayout";
import Nav from "./Nav";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import About from "./About";
import ViewPost from "./ViewPost";
import { getRequestHandling, postRequestHandling, deleteRequestHandling } from "./RequestHandling";

function App() {
  const APP_URL = "http://localhost:3001/posts";
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    // debugger;
    const callRequestHandling = async () => {
      const result = await getRequestHandling(APP_URL);
      setPosts(result);
    };
    // debugger;
    callRequestHandling();
  }, []);
  const navigate = useNavigate();

  const [titleValue, setTitleValue] = useState("");
  const [descValue, setDescValue] = useState("");

  const [searchBox, setSearchBox] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // debugger
    const newPost = {
      id: posts.length + 1,
      title: titleValue,
      date: format(new Date(), "MMMM dd, yyyy pp"),
      body: descValue,
    };
    setPosts([...posts, newPost]);
    const result = await postRequestHandling(APP_URL, newPost);
    setTitleValue("");
    setDescValue("");
    navigate("/");
  };

  const handleDelete = async (id) => {
    debugger
    const newPost = posts.filter((post) => post.id !== id);
    const DELETE_APP_URL =  `${APP_URL}/${id}`;
    await deleteRequestHandling(DELETE_APP_URL);
    setPosts(newPost);
    setTimeout(() => {
      navigate("/");
    }, 0);
  };

  return (
    <div className="container">
      <Header />
      <Nav searchBox={searchBox} setSearchBox={setSearchBox} />
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
          <Route
            index
            element={
              <AddPost
                titleValue={titleValue}
                setTitleValue={setTitleValue}
                descValue={descValue}
                setDescValue={setDescValue}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route
            path=":id"
            element={<ViewPost posts={posts} handleDelete={handleDelete} />}
          />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
