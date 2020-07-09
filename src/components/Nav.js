import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"

const TopNav = styled.nav`
  width: 30%;
  display: flex;
  justify-content: space-around;
`

export default function Nav() {
  return (
    <TopNav>
      <Link className="topNav" to="/">About</Link>
      <Link className="topNav" to="/resume">Skills</Link>
      <Link className="topNav" to="/projects">Projects</Link>
    </TopNav>
  );
}
