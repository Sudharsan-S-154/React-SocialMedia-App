import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "./Context/DataContext";

function Nav() {
  const { searchBox, setSearchBox } =  useContext(DataContext)
  return (
    <nav className="nav">
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <label className="searchLabel" for="search">
          Search Here
        </label>
        <input
          type="form"
          id="search"
          placeholder="Search here...."
          value={searchBox}
          onChange={(e) => setSearchBox(e.target.value)}
        />
      </form>
      <section className="navElements">
        <Link className="link" to="/">
          <div className="homeButton">Home</div>
        </Link>

        <Link className="link" to="/addPost">
          <div className="addPost">Add Post</div>
        </Link>

        <Link className="link" to="/about">
          <div className="about"> About </div>
        </Link>
      </section>
    </nav>
  );
}

export default Nav;
