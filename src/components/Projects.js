import React from "react";
import styled from "styled-components";

const ProjectCard = styled.div`
  width: 30%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  background-color: dodgerblue;
  height: 50vh;
`;

export default function Projects() {
  return (
    <>
      <a
        target="_blank"
        href="https://the-family-scrapbook.netlify.app/starthere"
      >
        <ProjectCard>
          <h2>The Family Scrapbook</h2>
          <p>
            I worked on this website as part of a 3 person team. My
            responsibility was the "Start Here Page". I also helped in the
            design and implementation of the navigation and footer. This project
            was written in HTML and CSS.
          </p>
        </ProjectCard>
      </a>
      <a target="_blank" href="https://gearformation.netlify.app/">
        <ProjectCard>
          <h2>GEARformation: Division 2</h2>
          <p>Description</p>
        </ProjectCard>
      </a>
      <a href="">
        <ProjectCard>
          <h2>Project</h2>
          <p>Description</p>
        </ProjectCard>
      </a>
    </>
  );
}
