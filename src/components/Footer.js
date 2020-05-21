import React from "react";
import Social from "./Social";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 20px 5px dodgerblue;
  background-color: lightblue;
  padding: 1%;
  height: 10vh;
`;

function Footer() {
  return (
    <StyledFooter>
      <Social />
    </StyledFooter>
  );
}

export default Footer;
