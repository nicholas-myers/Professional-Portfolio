import React from "react";
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const TopNav = styled.nav`
  width: 30%;
  display: flex;
  justify-content: space-around;
  @media(max-width: 500px) {
    width: 100%;
    padding-bottom: 3%;
    padding-top: 3%;
  }
  @media(max-width: 800px) {
    width: 50%;
  }
`

export default function Nav() {
  return (
    <TopNav>
      <NavLink className="topNav" exact to="/" activeStyle={{backgroundColor: "#5A86AF"}}>About</NavLink>
      <NavLink className="topNav" to="/skills/html" activeStyle={{backgroundColor: "#5A86AF"}}>Skills</NavLink>
      <NavLink className="topNav" to="/projects" activeStyle={{backgroundColor: "#5A86AF"}}>Projects</NavLink>
    </TopNav>
  );
}
