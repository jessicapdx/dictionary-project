import logo from "./logo.png";
import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="App-header row-12">
        <img
          src={logo}
          alt="Jessica Barrows, Frontend Developer"
          className="App-logo"
        />
      </div>
      <div className="Search-bar col">
        <Search />
      </div>
      <div className="App-footer row-12">
        <a href="https://github.com/jessicapdx/dictionary-project">
          Open source code
        </a>{" "}
        by Jessica Barrows
      </div>
    </div>
  );
}
