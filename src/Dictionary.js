import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import SearchResults from "./SearchResults";

export default function Dictionary() {
  let [query, setQuery] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    let resp = response.data[0];
    setResults(resp);
  }

  function search(event) {
    event.preventDefault();

    //api documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
    axios
      .get(apiUrl)
      .then(function (response) {
        handleResponse(response);
      })
      .catch(function (error) {
        alert(`${error.response.data.message}`);
      });
  }

  function handleSearchQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="Dictionary container">
      <form onSubmit={search} className="form-inline">
        <div className="form-group col-6">
          <div className="input-group">
            <input
              autoFocus={true}
              className="form-control search-bar"
              id="dictionarySearch"
              onChange={handleSearchQuery}
              placeholder="Enter an English word"
              type="search"
            />
            <button type="submit" className="btn btn-dark search-btn">
              Search
            </button>
          </div>
          <div className="hint">suggested words: plant, tree, star, grow</div>
        </div>
      </form>

      <SearchResults response={results} />
    </div>
  );
}
