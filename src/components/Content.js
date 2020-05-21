import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom"

import About from "./About"

const ContentSection = styled.section`

  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 40px 10px dodgerblue;
  background-color: lightblue;
  padding: 1%;
  height: 80vh;

`;

function Content() {
  return (
    <ContentSection>
      <Route path="/">
        <About />
      </Route>
    </ContentSection>
  );
}

export default Content;
