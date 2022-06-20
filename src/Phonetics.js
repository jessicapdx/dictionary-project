import React from "react";

export default function Phonetics(props) {
  if (props.phonetics) {
    console.log(props);
    return (
      <div className="Phonetic row-12">
        <a
          href={props.phonetics.audio}
          target="_blank"
          rel="noreferrer"
          className="listen btn btn-light"
        >
          Listen
        </a>
        <div className="pronounce">{props.phonetics.text}</div>
      </div>
    );
  } else {
    return null;
  }
}
