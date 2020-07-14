import React from "react";
import Social from "./Social";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 10px 1px #3ABAE6;
  background-color: #D5E3EB;
  padding: 1%;
  height: 15vh;
`;

function Footer() {
  return (
    <StyledFooter>
      <Social />
    </StyledFooter>
  );
}

export default Footer;
