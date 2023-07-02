import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

const Search = () => {
  return (
    <section id="search-section">
      <div className="container search-content">
        <input type="search" className="search-input" />
        <button className="search-button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </section>
  );
};

export default Search;
