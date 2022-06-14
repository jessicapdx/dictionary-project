import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [query, setQuery] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${query}`);
  }

  function handleSearchQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="Search">
      <form>
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
