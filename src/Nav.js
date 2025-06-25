import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <form>
        <label className="searchLabel" for="search">
          Search Here
        </label>
        <input type="form" id="search" placeholder="Search here...." />
      </form>
      <section className="navElements">
        <Link className="link" to="/">
          <div className="homeButton">Home</div>
        </Link>

        <Link className="link" to="/addPost">
          <div className="addPost">Add Post</div>
        </Link>

        <div className="about">About</div>
      </section>
    </nav>
  );
}

export default Nav;
