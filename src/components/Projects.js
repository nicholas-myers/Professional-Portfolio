import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProjectContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: wrap;
  * {
    /* border: 1px solid black; */
  }
  @media (max-width: 500px) {
    overflow: scroll;
    overflow-x: hidden;
  }
`;

const ProjectCard = styled.article`
  width: 40%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  background-color: #5a86af;
  height: 40%;
  padding: 2rem;
  /* margin: 1rem; */
  border-radius: 1rem;
  @media (max-width: 500px) {
    width: 90%;
    height: 30%;
    padding: 0;
    margin: 2% 0;
  }
  p,
  h2 {
    color: #d5e3eb;
    text-shadow: 0 0 1rem navy;
    /* margin: 3%; */
    font-size: 1.5rem;
  }
  @media (min-width: 700px) {
    width: 48%;
    height: 45%;
    h2,
    p {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 1000px) {
    width: 48%;
    height: 45%;
    h2,
    p {
      font-size: 2rem;
    }
  }
`;

export default function Projects() {
  // add a info button to each card and on click a modal appears
  // exit the modal
  return (
    <ProjectContainer>
      <ProjectCard>
        <h2>The Family Scrapbook</h2>
        {/* <iframe
          src="https://the-family-scrapbook.netlify.app/starthere"
          height="100%"
        ></iframe> */}
        <a
          href="https://the-family-scrapbook.netlify.app/starthere"
          target="_blank"
        >
          https://the-family-scrapbook.netlify.app/starthere
        </a>
        <p>
          I worked on this website as part of a 3 person team. My responsibility
          was the "Start Here Page". I also helped in the design and
          implementation of the navigation and footer. This project was written
          in HTML and CSS.
        </p>
      </ProjectCard>
      <ProjectCard>
        <h2>GEARformation: Division 2</h2>
        {/* <iframe src="https://gearformation.netlify.app/" height="100%"></iframe> */}
        <a href="https://gearformation.netlify.app/" target="_blank">
          https://gearformation.netlify.app/
        </a>
        <p>
          This is a personal project. The information for the game was spread
          out over many sites or spreadsheets found online. My goal was to
          compile that information into one site to make the information easier
          to find. In the process of converting to React and creating a Java API
          for the backend. Languages: HTML and CSS.
        </p>
      </ProjectCard>
      <ProjectCard>
        <h2>Apollo</h2>
        {/* <iframe src="https://b.apollox.dev" height="100%"></iframe> */}
        <a href="https://b.apollox.dev" target="_blank">
          https://b.apollox.dev
        </a>
        <p>Login = llama003@maildrop.cc : Test003Test</p>
        <p>
          I worked as part of a cross-functional team. The back-end is developed
          in the Java Spring framework. The Front-End uses React and Redux.
          Secured with Okta.
        </p>
      </ProjectCard>
      <ProjectCard>
        <h2>Conway's Game of Life</h2>
        {/* <iframe src="https://thefoodtruckr.netlify.app/" height="100%"></iframe> */}
        <a href="https://thefoodtruckr.netlify.app/" target="_blank">
          https://cs-build-week-1-ruby.vercel.app/
        </a>
        <p>
          The visual representation of the mathematical simulation of cell
          lifecycles. I constructed the state management using the Immer library
          to create copies of an immutable state. I enacted an algorithm to
          follow the rules of Conway for simulation cell lifecycles.
          I implemented the code base in the one-week release canvas time frame. Languages: React and Immer library.
        </p>
      </ProjectCard>
    </ProjectContainer>
  );
}
