import React from "react";
import styled from "styled-components";

const AboutSection = styled.div`
  height: 90%;
  width: 50%;
  border-radius: 5rem;
  background-color: #5a86af;
  box-shadow: 0 0 2rem 0 #3abae6;
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  align-items: center;
  @media(max-width: 500px) {
    width: 90%;
  }
`;

const ProfilePic = styled.img`
  border-radius: 5rem;
  height: 50%;
  @media(max-width: 500px) {
    padding: 2%;
  }
`;

const AboutMe = styled.p`
  font-size: 2rem;
  color: #d5e3eb;
  text-shadow: 0 2px 20px #1a2243;
  @media(max-width: 500px) {
    padding: 2%;
  }
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
