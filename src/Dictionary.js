import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import SearchResults from "./SearchResults";

export default function Dictionary(props) {
  let [query, setQuery] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    let resp = response.data[0];
    setResults(resp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
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

  if (loaded) {
    return (
      <div className="Dictionary container">
        <form onSubmit={handleSubmit} className="form-inline">
          <div className="form-group col-12">
            <h1 className="search-heading">
              What word would you like to look up?
            </h1>
            <div className="input-group">
              <input
                autoFocus={true}
                className="form-control search-bar"
                defaultValue={props.defaultKeyword}
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
  } else {
    load();
    return "Loading";
  }
}
