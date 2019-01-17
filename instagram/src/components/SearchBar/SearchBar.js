import React from "react";
import PropTypes from "prop-types";

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
          value={props.searchBarInput}
        />
      </div>
      <div className="right">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
        <i className="fas fa-door-open" onClick={props.handleLogout} />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  handleChange: PropTypes.func,
  searchBarInput: PropTypes.string,
  handleLogout: PropTypes.func
};

export default SearchBar;
