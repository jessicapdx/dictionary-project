import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [query, setQuery] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
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
    <div className="Search">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter an English word"
          autoFocus={true}
          onChange={handleSearchQuery}
        />
      </form>
    </div>
  );
}
