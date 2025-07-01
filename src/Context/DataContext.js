import { createContext } from "react";
import {  useNavigate } from "react-router-dom";
// import "./index.css";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import api from "../RequestHandling.js";
import useScreenIcon from "../hooks/useScreenIcon.js";
// import DataContext, { DataProvider } from "./Context/DataContext.js";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
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
  const { height, width } = useScreenIcon();

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
    } finally {
      navigate("/");
    }
  };
  return (
    <DataContext.Provider
      value={{
        height,
        width,
        searchBox,
        setSearchBox,
        titleValue,
        setTitleValue,
        descValue,
        setDescValue,
        handleSubmit,
        posts,
        handleDelete,
        editTitleValue,
        setEditTitleValue,
        editDescValue,
        setEditDescValue,
        handleEdit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
