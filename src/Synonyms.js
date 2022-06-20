import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div>
        <h5>Synonyms</h5>
        <ul className="Synonyms">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h5>Synonyms</h5>
        <span className="empty-synonym">No synonyms found</span>
      </div>
    );
  }
}
