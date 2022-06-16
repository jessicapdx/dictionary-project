import React from "react";
import Meaning from "./Meaning";

export default function SearchResults(props) {
  if (props.response !== null) {
    // words can have multiple meanings, hence meaning loop
    return (
      <div className="Results">
        <h2 className="Results-word">{props.response.word}</h2>
        {props.response.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
