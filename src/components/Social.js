import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_UNHUHq9GUust3ROWtWktl");

const Social = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const SocialLink = styled.a`
  text-decoration: none;
  background-color: #1a2243;
  color: lightgray;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px 0 #3abae6;
  font-size: 4rem;
  transition: 1s;
  &:hover {
    background-color: #3abae6;
    box-shadow: 0 0 10px 2px #1a2243;
    cursor: pointer;
    transition: 0.25s;
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
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  @media (max-width: 500px) {
    padding-left: 10%;
    padding-top: 10%;
  }
`;

const EmailModal = styled.div`
  background-color: white;
  width: 50%;
  height: 80%;
  border-radius: 1rem;
  @media (max-width: 500px) {
    width: 90%;
    form {
      input {
        width: 90%;
      }
      textarea {
        width: 90%;
      }
    }
  }
`;

export default function Nav() {
  const initialFormValues = {
    name: "",
    email: "",
    message: "",
  };

  const [warning, setWarning] = useState("");

  const [emailValues, setEmailValues] = useState(initialFormValues);

  const [isVisible, setIsVisible] = useState("none");

  const showEmailModal = () => {
    setIsVisible("block");
  };

  const changeValue = (e) => {
    setEmailValues({
      ...emailValues,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    for (const [key, value] of Object.entries(emailValues)) {
      if (value === "") {
        return setWarning(`Please input your ${key}!`);
      }
      if (key === "email") {
        let re = /\S+@\S+\.\S+/
        if (re.test(value) === false) {
          return setWarning("Please enter a valid email!")
        }
      }
    }
    emailjs
      .sendForm(
        "service_5vq0w4s",
        "template_lr6bojx",
        e.target,
        "user_UNHUHq9GUust3ROWtWktl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setIsVisible("none");
    setEmailValues(initialFormValues);
  };

  return (
    <Social>
      <SocialLink
        className="fa fa-twitter"
        href="https://twitter.com/NickMyersPro"
        target="_blank"
      ></SocialLink>
      {/* <SocialLink className="fa fa-twitch" href="https://www.twitch.tv/korefucious" target="_blank"></SocialLink> */}
      {/* <SocialLink className="fa fa-youtube" href="https://www.youtube.com/channel/UCQ3_QXu3IVyqSX6NoN4Di2w/featured" target="_blank"></SocialLink> */}
      <SocialLink
        className="fa fa-linkedin"
        href="https://www.linkedin.com/in/nicholas-myers-professional/"
        target="_blank"
      ></SocialLink>
      <SocialLink
        className="fa fa-envelope"
        onClick={showEmailModal}
      ></SocialLink>
      <ModalBackdrop style={{ display: `${isVisible}` }}>
        <EmailModal>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2 style={{ padding: "1rem" }}>Contact Me</h2>
            <p style={{ padding: "1rem" }}>nicholas.myers.professional@gmail.com</p>
            <button
              style={{
                fontSize: "2rem",
                padding: "1rem",
                border: "none",
                borderRadius: "1rem",
                backgroundColor: "white",
              }}
              onClick={() => setIsVisible("none")}
            >
              X
            </button>
          </div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              padding: "4rem",
              height: "100%",
              alignItems: "center",
            }}
            onSubmit={sendEmail}
          >
            <label>Name</label>
            <input
              name="name"
              value={emailValues.name}
              onChange={changeValue}
            />
            <label>Email</label>
            <input
              name="email"
              value={emailValues.email}
              onChange={changeValue}
            />
            <label>Message</label>
            <textarea
              name="message"
              value={emailValues.message}
              onChange={changeValue}
            />
            {warning != "" && <p style={{ color: "red" }}>{warning}</p>}
            <button
              style={{
                width: "auto",
                padding: ".5rem",
                marginBottom: "2rem",
                backgroundColor: "#1a2243",
                color: "white",
                borderRadius: "1rem",
                border: "none",
                padding: "1rem",
              }}
            >
              Send
            </button>
          </form>
        </EmailModal>
      </ModalBackdrop>
    </Social>
  );
}
