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
            <div>
              <h5>Definition</h5>
              {definition.definition}
            </div>
            <div className="example">
              <em>{definition.example}</em>
            </div>
            <br />
            <div>
              <Synonyms synonyms={props.meaning.synonyms} />
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
