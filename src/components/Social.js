import React from "react";
import styled from "styled-components";

const Social = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const SocialLink = styled.a`
  text-decoration: none;
  background-color: navy;
  color: lightgray;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px 0 dodgerblue;
  font-size: 4rem;
  transition: 1s;
  &:hover {
    background-color: dodgerblue;
    box-shadow: 0 0 10px 2px navy;
    cursor: pointer;
    transition: .25s;
  }
`;

export default function Nav() {
  return (
    <Social>
      <SocialLink className="fa fa-twitter" href="https://twitter.com/NickMyersPro" target="_blank"></SocialLink>
      <SocialLink className="fa fa-twitch" href="https://www.twitch.tv/korefucious" target="_blank"></SocialLink>
      <SocialLink className="fa fa-youtube" href="https://www.youtube.com/channel/UCQ3_QXu3IVyqSX6NoN4Di2w/featured" target="_blank"></SocialLink>
      <SocialLink className="fa fa-linkedin" href="https://www.linkedin.com/in/nicholas-myers-professional/" target="_blank"></SocialLink>
      <SocialLink className="fa fa-google" href="nicholas.myers.professional@gmail.com" target="_blank"></SocialLink>
    </Social>
  );
}