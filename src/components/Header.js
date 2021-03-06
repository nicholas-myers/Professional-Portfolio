import React from "react";
import Nav from "./Nav";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: inset 0 0 10px 1px #3ABAE6;
  background-color: #D5E3EB;
  height: 10vh;
  @media(max-width: 500px) {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const NameContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-shadow: 0 0 5px #3ABAE6;
  @media(max-width: 1350px) {
    flex-wrap: wrap;
  }
  @media(max-width: 500px) {
    display: block;
    width: 100%;
  }
`;

const Dot = styled.div`
  border: 5px solid #1A2243;
  @media(max-width: 1380px) {
    display: none
  }
`

const Title = styled.h1`
  font-size: 4rem;
  @media(max-width: 1350px) {
    width: 100%;
  }
  @media(max-width: 500px) {
    width: 100%;
    font-size: 3rem;
  }
  @media(max-width: 800px) {
    width: 100%;
    font-size: 2rem;
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
