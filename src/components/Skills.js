import React from "react";
import { NavLink, Route } from "react-router-dom";
import styled from "styled-components";

const SkillSection = styled.section`
  height: 100%;
  width: 100%;
`;
const SkillNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 0 10px 5px #3ABAE6;
  margin: 0;
  a {
    background-color: #2F63AD;
    padding: 0 1rem;
    box-shadow: 0 0 10px 5px #3ABAE6;
    border-radius: 1rem;
    color: #D5E3EB;
    text-decoration: none;
    text-shadow: 0px 0px 15px #1A2243;
    transition: 1s;
    &:hover {
      background-color: #3ABAE6;
      box-shadow: 0 0 10px 1px #1A2243;
      padding: 0 1%;
      transition: 1s;
    }
  }
`;

const SkillCOntainer = styled.div`
  display: flex;
  justify-content: center;

`

export default function Skills() {
const languages = ["HTML", "CSS", "JAVASCRIPT", "REACT", "JAVA", "PYTHON"]
  return (
    <SkillSection>
      <SkillNav>
        <NavLink to="/skills/html" activeStyle={{backgroundColor: "#3ABAE6"}}>HTML</NavLink>
        <NavLink to="/skills/css" activeStyle={{backgroundColor: "#3ABAE6"}}>CSS</NavLink>
        <NavLink to="/skills/js"activeStyle={{backgroundColor: "#3ABAE6"}}>JAVASCRIPT</NavLink>
        <NavLink to="/skills/react" activeStyle={{backgroundColor: "#3ABAE6"}}>REACT</NavLink>
        <NavLink to="/skills/java" activeStyle={{backgroundColor: "#3ABAE6"}}>JAVA</NavLink>
        <NavLink to="/skills/python" activeStyle={{backgroundColor: "#3ABAE6"}}>PYTHON</NavLink>
      </SkillNav>
      <div>
        <Route path="/skills/html">
            <article>
              <h2>HTML</h2>
              <p>My Approach to HTML</p>
            </article>
        </Route>
        <Route path="/skills/css">
            <article>
              <h2>CSS</h2>
              <p>My Approach to CSS</p>
            </article>
        </Route>
        <Route path="/skills/js">
            <article>
              <h2>JAVASCRIPT</h2>
              <p>My Approach to JAVASCRIPT</p>
            </article>
        </Route>
        <Route path="/skills/react">
            <article>
              <h2>REACT</h2>
              <p>My Approach to React</p>
            </article>
        </Route>
        <Route path="/skills/java">
            <article>
              <h2>JAVA</h2>
              <p>My Approach to JAVA</p>
            </article>
        </Route>
        <Route path="/skills/python">
            <article>
              <h2>PYTHON</h2>
              <p>My Approach to Python</p>
            </article>
        </Route>
      </div>
    </SkillSection>
  );
}
