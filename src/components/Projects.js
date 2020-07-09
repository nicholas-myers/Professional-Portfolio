import React from "react";
import styled from "styled-components";

const ProjectCard = styled.article`
  width: 30%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  background-color: dodgerblue;
  height: 70vh;
  padding: 2rem;
  border-radius: 1rem;

  p, h2 {
    color: lightblue;
    text-shadow: 0 0 1rem navy;
    margin: 3%;
  }
`;

export default function Projects() {
  // add a info button to each card and on click a modal appears 
  // exit the modal
  return (
    <section>
      <ProjectCard>
        <h2>The Family Scrapbook</h2>
        <iframe
          src="https://the-family-scrapbook.netlify.app/starthere"
          height="100%"
        ></iframe>
        <p>
          I worked on this website as part of a 3 person team. My responsibility
          was the "Start Here Page". I also helped in the design and
          implementation of the navigation and footer. This project was written
          in HTML and CSS.
        </p>
      </ProjectCard>
      <ProjectCard>
        <h2>GEARformation: Division 2</h2>
        <iframe src="https://gearformation.netlify.app/" height="100%"></iframe>
        <p>
          This is a personal project. The information for the game was spread
          out over many sites or spreadsheets found online. My goal was to
          compile that information into one site to make the information easier
          to find. The next steps for this project are to convert to JSON and
          implement it as an API that anyone could use. Currently the code is
          written in HTML and CSS.
        </p>
      </ProjectCard>
    </section>
  );
}
