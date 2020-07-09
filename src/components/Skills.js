import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SkillSection = styled.section`
  height: 100%;
  width: 100%;
`;
const SkillNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  //   background-color: dodgerblue;
  box-shadow: 0 0 40px 10px dodgerblue;
  a {
    background-color: navy;
    padding: 0 1rem;
    box-shadow: 0 0 10px 5px dodgerblue;
    border-radius: 1rem;
    color: lightblue;
    text-decoration: none;
    text-shadow: 0px 0px 15px navy;
    transition: 1s;
    &:hover {
      background-color: dodgerblue;
      box-shadow: 0 0 10px 1px navy;
      padding: 0 1%;
      transition: 1s;
    }
  }
`;

export default function Skills() {
  return (
    <SkillSection>
      <SkillNav>
        <Link className="linkskill">HTML</Link>
        <Link>CSS</Link>
        <Link>JAVASCRIPT</Link>
        <Link>REACT</Link>
        <Link>JAVA</Link>
        <Link>PYTHON</Link>
      </SkillNav>
      <div>
        <article>
          <h2>HTML</h2>
          <p>My Approach to HTML</p>
        </article>
        <article>
          <h2>CSS</h2>
          <p>My Approach to CSS</p>
        </article>
        <article>
          <h2>JAVASCRIPT</h2>
          <p>My Approach to JAVASCRIPT</p>
        </article>
        <article>
          <h2>REACT</h2>
          <p>My Approach to React</p>
        </article>
        <article>
          <h2>JAVA</h2>
          <p>My Approach to JAVA</p>
        </article>
        <article>
          <h2>PYTHON</h2>
          <p>My Approach to Python</p>
        </article>
      </div>
    </SkillSection>
  );
}
