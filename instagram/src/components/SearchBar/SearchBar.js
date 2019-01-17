import React from "react";
import PropTypes from "prop-types";

import Header from "../Styles/Reusables/Header";
import LogoHeader from "../Styles/Reusables/LogoHeader";
import LogoImage from "../Styles/Reusables/LogoImage";

import logo from "../../img/ig-logo.png";

const SearchBar = props => {
  return (
    <Header>
      <div className="left">
        <i className="fas fa-camera" />
        <LogoHeader>
          <LogoImage src={logo} alt="Instagram Logo" />
        </LogoHeader>
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
    </Header>
  );
};

SearchBar.propTypes = {
  handleChange: PropTypes.func,
  searchBarInput: PropTypes.string,
  handleLogout: PropTypes.func
};

export default SearchBar;
