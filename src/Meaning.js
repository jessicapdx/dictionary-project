import React from "react";

export default function Meaning(props) {
  console.log(props);

  // meanings can have multiple definitions, hence loop through definitions
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {props.meaning.definitions.definition}
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
