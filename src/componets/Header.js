import React from "react";
import "./header.css"

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-dark bg-primary" style={{"background-color":"#e3f2fd"}}>
        <div class="container-fluid">
          <a href="#" class="navbar-brand googlefonts">
          <i class="icon-bullhorn icon-2x" > </i>BOOK CHEAT STORE</a>
          <form class="d-flex">
            <input
              class="form-control me-2 mr-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Header;
