import React from "react";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Nicholas Myers - Full Stack Web Developer - Portland, OR</h1>
      </header>
      <nav>
        <a href="#">Home</a>
        <a href="#">Resume</a>
        <a href="#">Projects</a>
        <a href="#">Blog</a>
      </nav>
      <div className="content">
        <section></section>
      </div>
      <footer>
        <nav>
          <a href="#">Home</a>
          <a href="#">Resume</a>
          <a href="#">Projects</a>
          <a href="#">Blog</a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
