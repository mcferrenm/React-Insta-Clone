import React from "react";

import "./SearchBar.css";
import logo from "../../img/ig-logo.png";

const SearchBar = props => {
  return (
    <div className="search-bar">
      <div className="left">
        <i className="fas fa-camera" />
        <img src={logo} alt="Instagram Logo" className="logo" />
      </div>
      <div className="center">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          name="searchBarInput"
          onChange={props.handleChange}
        />
      </div>
      <div className="right">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </div>
  );
};

export default SearchBar;
