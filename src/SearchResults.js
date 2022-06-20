import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function SearchResults(props) {
  if (props.response !== null) {
    // words can have multiple meanings, hence meaning loop
    return (
      <div className="Results">
        <section className="col-sm-center">
          <h2 className="Results-word">{props.response.word}</h2>
          {props.response.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics response={phonetic} />
              </div>
            );
          })}
          <Phonetics phonetics={props.response.phonetics[0]} />
        </section>
        {props.response.meanings.map(function (meaning, index) {
          return (
            <section key={index} className="col-sm-center">
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
