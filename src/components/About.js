import React from "react";
import styled from "styled-components";

const AboutSection = styled.div`
  display: block;
  width: 50%;
  border: 2px solid navy;
  border-radius: 5rem;
  padding: 1%;
  background-color: skyblue;
  box-shadow: 0 0 2rem 0 dodgerblue;
`;

const ProfilePic = styled.img`
  border: 2px solid navy;
  border-radius: 5rem;
  width: 30rem;
`;

const AboutMe = styled.p`
  margin: 3%;
`;

export default function About() {
  return (
    <AboutSection>
      <ProfilePic src={require("../img/me.jpg")} alt="profile" />
      <AboutMe>
        My name is Nick, I am 33 years old, and I live in Portland, OR. I love
        to learn, especially about technology. I've been an avid gamer and
        computer enthusiast since I was young. I like to build my own computers
        and beatbox using a RC-505 loop station as hobbies.
      </AboutMe>
    </AboutSection>
  );
}
