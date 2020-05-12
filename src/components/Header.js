import React from "react";
import Nav from "./Nav";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: inset 0 0 20px 5px dodgerblue;
  background-color: lightblue;
  padding: 1%;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Name>
        <h1>Nicholas Myers</h1>
        <div></div>
        <p>Full Stack Web Developer</p>
        <div></div>
        <p>Portland, OR</p>
      </Name>
      <Nav />
    </StyledHeader>
  );
}
