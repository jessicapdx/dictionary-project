import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img
          src={logo}
          alt="Jessica Barrows, Frontend Developer"
          className="App-logo"
        />
      </div>
      <div className="Search-bar">
        <Dictionary defaultKeyword="space" />
      </div>
      <div className="App-footer">
        <a href="https://github.com/jessicapdx/dictionary-project">
          Open source code
        </a>{" "}
        by Jessica Barrows
      </div>
    </div>
  );
}
