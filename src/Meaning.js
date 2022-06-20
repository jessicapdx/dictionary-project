import React from "react";
import Synonyms from "./Synonyms";
import "./Dictionary.css";

export default function Meaning(props) {
  // meanings can have multiple definitions, hence loop through definitions
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="definitions">
            {props.meaning.definitions.definition}
            <br />
            <strong>Definition: </strong>
            {definition.definition}
            <br />
            <strong>Example: </strong>
            <em>{definition.example}</em>
            <br />
            <strong>Synonyms: </strong>
            <Synonyms synonyms={props.meaning.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
