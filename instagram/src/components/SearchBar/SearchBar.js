import React from "react";

import logo from "../../img/ig-logo.png";

const SearchBar = props => {
  return (
    <div className="search-bar">
      <div className="left">
        <i class="fas fa-camera" />
        <img src={logo} alt="Instagram Logo" className="logo" />
      </div>
      <input type="text" placeholder="Search" />
      <div className="right">
        <i class="far fa-compass" />
        <i className="far fa-heart" />
        <i class="far fa-user" />
      </div>
    </div>
  );
};

export default SearchBar;
