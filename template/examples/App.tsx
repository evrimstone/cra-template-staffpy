import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ExampleComponent } from "../src";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ExampleComponent text="Hello Staffpy CRA" />
      </header>
    </div>
  );
}

export default App;
