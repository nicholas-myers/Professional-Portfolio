import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects"

const ContentSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: inset 0 0 40px 10px dodgerblue;
  background-color: lightblue;
  padding: 1%;
  height: 80vh;
`;

function Content() {
  return (
    <ContentSection>
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </ContentSection>
  );
}

export default Content;
