import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  // meanings can have multiple definitions, hence loop through definitions
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {props.meaning.definitions.definition}
            <br />
            <strong>Definition</strong>
            <br />
            {definition.definition}
            <br />
            <strong>Example</strong>
            <br />
            <em>{definition.example}</em>
            <br />
            <strong>Synonyms</strong>
            <br />
            <Synonyms synonyms={props.meaning.synonyms} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
