import React from "react";
// import styled from "styled-components";
import "./App.css";

import Header from "./components/Header"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <section></section>
      </div>
      <footer>
      <Nav />
      </footer>
    </div>
  );
}

export default App;
