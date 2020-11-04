import React, {useState} from "react";
import styled from "styled-components";


const Social = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const SocialLink = styled.a`
  text-decoration: none;
  background-color: #1A2243;
  color: lightgray;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px 0 #3ABAE6;
  font-size: 4rem;
  transition: 1s;
  &:hover {
    background-color: #3ABAE6;
    box-shadow: 0 0 10px 2px #1A2243;
    cursor: pointer;
    transition: .25s;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding-left: 30%;
  padding-top: 10rem;
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

const EmailModal = styled.div`
  background-color: white;
  width: 50%;
  height: 50%;
  border-radius: 1rem;
`

export default function Nav() {
  const [isVisible, setIsVisible] = useState("none")

  const showEmailModal = () => {
    setIsVisible("block")
  }

  return (
    <Social>
      <SocialLink className="fa fa-twitter" href="https://twitter.com/NickMyersPro" target="_blank"></SocialLink>
      {/* <SocialLink className="fa fa-twitch" href="https://www.twitch.tv/korefucious" target="_blank"></SocialLink> */}
      {/* <SocialLink className="fa fa-youtube" href="https://www.youtube.com/channel/UCQ3_QXu3IVyqSX6NoN4Di2w/featured" target="_blank"></SocialLink> */}
      <SocialLink className="fa fa-linkedin" href="https://www.linkedin.com/in/nicholas-myers-professional/" target="_blank"></SocialLink>
      <SocialLink className="fa fa-envelope" onClick={showEmailModal} ></SocialLink>
      <ModalBackdrop style={{display: `${isVisible}`}}>
        <EmailModal>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h2 style={{padding: '1rem'}}>
              Contact Me
            </h2>
            <button style={{fontSize: '2rem', padding: '1rem', borderRadius: '1rem', backgroundColor: 'white'}} onClick={() => setIsVisible("none")}>X</button>
          </div>
          <form style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: "4rem", height: "100%", alignItems: "center"}}>
            <label>Name</label>
            <input style={{width: "50%"}}></input>
            <label>Message</label>
            <textarea></textarea>
            <button style={{width: '4rem'}}>Send</button>
          </form>
        </EmailModal>
      </ModalBackdrop>
    </Social>
  );
}
