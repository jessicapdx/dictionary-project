import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Photos from "./Photos";
import SearchResults from "./SearchResults";

export default function Dictionary(props) {
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  let [query, setQuery] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);

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

    // api docs for image provider, pexels:
    let photoQty = 9;
    let imageKey = "563492ad6f91700001000001ba52d59e5ad14a5fb88154ef69035b23";
    let imageUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=${photoQty}`;
    axios
      .get(imageUrl, { headers: { Authorization: `${imageKey}` } })
      .then(handleImageResponse);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSearchQuery(event) {
    setQuery(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary container">
        <form onSubmit={handleSubmit} className="form-inline">
          <div className="form-group">
            <h1 className="search-heading">
              What word would you like to look up?
            </h1>
            <div className="input-group search-bar">
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
