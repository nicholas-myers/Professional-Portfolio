import React from "react";
import Nav from "./Nav";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: inset 0 0 20px 5px dodgerblue;
  background-color: lightblue;
  height: 10vh;

`;

const NameContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-shadow: 0 0 5px dodgerblue;
  @media(max-width: 1350px) {
    flex-wrap: wrap;
  }
`;

const Dot = styled.div`

  border: 5px solid navy;
  @media(max-width: 1380px) {
    display: none
  }
`

const Title = styled.h1`

  font-size: 4rem;
  @media(max-width: 1350px) {
    width: 100%;
  }

`

export default function Header() {
  return (
    <StyledHeader>
      <NameContainer>
        <Title>Nicholas Myers</Title>
        <Dot></Dot>
        <p>Full Stack Web Developer</p>
        <Dot></Dot>
        <p>Portland, OR</p>
      </NameContainer>
      <Nav />
    </StyledHeader>
  );
}