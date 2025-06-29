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
import api from "./RequestHandling";
import EditPost from "./EditPost";
function App() {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    const callRequestHandling = async () => {
      try {
        const result = await api.get("/posts");
        if (result != null) {
          setPosts(result.data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    callRequestHandling();
  }, []);
  const navigate = useNavigate();

  const [titleValue, setTitleValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [editTitleValue, setEditTitleValue] = useState("");
  const [editDescValue, setEditDescValue] = useState("");

  const [searchBox, setSearchBox] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = {
      id: posts.length + 1,
      title: titleValue,
      date: format(new Date(), "MMMM dd, yyyy pp"),
      body: descValue,
    };
    try {
      const result = await api.post("/posts", newPost);
      setPosts([...posts, newPost]);
      setTitleValue("");
      setDescValue("");
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async (id) => {
    const newPost = posts.filter((post) => post.id !== id);
    setPosts(newPost);
    const DELETE_APP_URL = `posts/${id}`;
    try {
      await api.delete(DELETE_APP_URL);
      setTimeout(() => {
        navigate("/");
      }, 0);
    } catch (e) {
      console.log(e);
    }
  };

  const handleEdit = async (e, id) => {
    e.preventDefault();
    const newPost = {
      id: id,
      title: editTitleValue,
      date: format(new Date(), "MMMM dd, yyyy pp"),
      body: editDescValue,
    };
    const editPost = posts.map((post) => (post.id === id ? newPost : post));
    const EDIT_APP_URL = `posts/${id}`;
    setPosts(editPost);
    try {
      const result = await api.put(EDIT_APP_URL, newPost);
    } catch (e) {
      console.log(e);
    }
    finally{
      navigate('/');
    }
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
        <Route
          path="/editPost/:id"
          element={
            <EditPost
              editTitleValue={editTitleValue}
              setEditTitleValue={setEditTitleValue}
              editDescValue={editDescValue}
              setEditDescValue={setEditDescValue}
              posts={posts}
              handleEdit={handleEdit}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
